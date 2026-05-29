import { createFileRoute } from "@tanstack/react-router";

// Target sheet (Cura Applications)
const SPREADSHEET_ID = "1q4VGtosakEm53NJ8iGbSuHOLVewy3CRO8jJgUZzPHuw";
const RANGE = "Sheet1!A:BZ";
const SHEETS_GATEWAY = "https://connector-gateway.lovable.dev/google_sheets/v4";
const DRIVE_GATEWAY = "https://connector-gateway.lovable.dev/google_drive/drive/v3";
const DRIVE_UPLOAD_GATEWAY = "https://connector-gateway.lovable.dev/google_drive/upload/drive/v3";

// Field order — these become the row written to the sheet.
// Configure your Sheet headers (row 1) in this exact order for readability.
const TEXT_FIELDS = [
  "course",
  "preferred_campus",
  "academic_year",
  "mode_of_admission",
  "partner_name",
  "source_of_enquiry",
  "full_name",
  "dob",
  "gender",
  "nationality",
  "category",
  "aadhaar",
  "student_mobile",
  "student_email",
  "father_name",
  "mother_name",
  "parent_mobile",
  "parent_occupation",
  "annual_income",
  "current_address",
  "permanent_address",
  "city",
  "state",
  "district",
  "pincode",
  "tenth_board",
  "tenth_school",
  "tenth_year",
  "tenth_percentage",
  "twelfth_board",
  "twelfth_school",
  "twelfth_stream",
  "twelfth_subjects",
  "physics_marks",
  "chemistry_marks",
  "biology_marks",
  "english_marks",
  "twelfth_total_percentage",
  "twelfth_year",
  "counsellor_name",
  "hostel_required",
  "education_loan",
  "registration_fee_paid",
  "amount_paid",
  "transaction_id",
  "consent_to_contact",
  "declaration",
  "page_url",
] as const;

const FILE_FIELDS = [
  "photo",
  "tenth_marksheet",
  "twelfth_marksheet",
  "aadhaar_card",
  "transfer_certificate",
  "migration_certificate",
  "caste_income_certificate",
] as const;

const REQUIRED = new Set([
  "full_name",
  "dob",
  "student_mobile",
  "student_email",
  "course",
  "city",
  "tenth_percentage",
  "twelfth_total_percentage",
]);

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

function nowIST() {
  return new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
}

function sanitizeFolderName(s: string) {
  return s.replace(/[^a-zA-Z0-9_\- ]+/g, "").slice(0, 80) || "applicant";
}

async function driveCreateFolder(name: string, lovableKey: string, driveKey: string) {
  const res = await fetch(`${DRIVE_GATEWAY}/files?fields=id,webViewLink`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${lovableKey}`,
      "X-Connection-Api-Key": driveKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      mimeType: "application/vnd.google-apps.folder",
    }),
  });
  if (!res.ok) {
    const t = await res.text();
    throw new Error(`Drive folder create failed [${res.status}]: ${t}`);
  }
  return (await res.json()) as { id: string; webViewLink: string };
}

async function driveUploadFile(opts: {
  file: File;
  folderId: string;
  prefix: string;
  lovableKey: string;
  driveKey: string;
}) {
  const { file, folderId, prefix, lovableKey, driveKey } = opts;
  const boundary = `----curaboundary${crypto.randomUUID()}`;
  const meta = {
    name: `${prefix}-${file.name}`.slice(0, 200),
    parents: [folderId],
  };
  const bytes = new Uint8Array(await file.arrayBuffer());
  const enc = new TextEncoder();
  const head = enc.encode(
    `--${boundary}\r\n` +
      `Content-Type: application/json; charset=UTF-8\r\n\r\n` +
      `${JSON.stringify(meta)}\r\n` +
      `--${boundary}\r\n` +
      `Content-Type: ${file.type || "application/octet-stream"}\r\n\r\n`,
  );
  const tail = enc.encode(`\r\n--${boundary}--`);
  const body = new Uint8Array(head.length + bytes.length + tail.length);
  body.set(head, 0);
  body.set(bytes, head.length);
  body.set(tail, head.length + bytes.length);

  const res = await fetch(
    `${DRIVE_UPLOAD_GATEWAY}/files?uploadType=multipart&fields=id,webViewLink`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${lovableKey}`,
        "X-Connection-Api-Key": driveKey,
        "Content-Type": `multipart/related; boundary=${boundary}`,
      },
      body,
    },
  );
  if (!res.ok) {
    const t = await res.text();
    throw new Error(`Drive upload failed [${res.status}]: ${t}`);
  }
  return (await res.json()) as { id: string; webViewLink: string };
}

export const Route = createFileRoute("/api/public/applications")({
  server: {
    handlers: {
      OPTIONS: async () => new Response(null, { status: 204, headers: CORS_HEADERS }),
      POST: async ({ request }) => {
        const LOVABLE_API_KEY = process.env.LOVABLE_API_KEY;
        const GOOGLE_SHEETS_API_KEY = process.env.GOOGLE_SHEETS_API_KEY;
        const GOOGLE_DRIVE_API_KEY = process.env.GOOGLE_DRIVE_API_KEY;
        if (!LOVABLE_API_KEY || !GOOGLE_SHEETS_API_KEY || !GOOGLE_DRIVE_API_KEY) {
          return Response.json(
            { ok: false, error: "Application service not configured" },
            { status: 500, headers: CORS_HEADERS },
          );
        }

        let form: FormData;
        try {
          form = await request.formData();
        } catch {
          return Response.json(
            { ok: false, error: "Invalid form data" },
            { status: 400, headers: CORS_HEADERS },
          );
        }

        // Extract text fields
        const data: Record<string, string> = {};
        for (const k of TEXT_FIELDS) {
          const v = form.get(k);
          data[k] = typeof v === "string" ? v.trim().slice(0, 2000) : "";
        }

        // Validate required
        const missing = [...REQUIRED].filter((k) => !data[k]);
        if (missing.length) {
          return Response.json(
            { ok: false, error: `Missing required fields: ${missing.join(", ")}` },
            { status: 400, headers: CORS_HEADERS },
          );
        }

        // Validate file sizes (max 8 MB each, max 7 files)
        const files: { field: string; file: File }[] = [];
        for (const k of FILE_FIELDS) {
          const f = form.get(k);
          if (f instanceof File && f.size > 0) {
            if (f.size > 8 * 1024 * 1024) {
              return Response.json(
                { ok: false, error: `${k} exceeds 8 MB limit` },
                { status: 400, headers: CORS_HEADERS },
              );
            }
            files.push({ field: k, file: f });
          }
        }

        // Create a per-application folder in Drive
        const folderName = `${nowIST()} — ${sanitizeFolderName(data.full_name)} — ${sanitizeFolderName(data.course)}`;
        let folderId = "";
        let folderUrl = "";
        try {
          const folder = await driveCreateFolder(folderName, LOVABLE_API_KEY, GOOGLE_DRIVE_API_KEY);
          folderId = folder.id;
          folderUrl = folder.webViewLink;
        } catch (err) {
          console.error(err);
          return Response.json(
            { ok: false, error: "Failed to create document folder" },
            { status: 502, headers: CORS_HEADERS },
          );
        }

        // Upload files
        const fileLinks: Record<string, string> = {};
        for (const f of files) {
          try {
            const up = await driveUploadFile({
              file: f.file,
              folderId,
              prefix: f.field,
              lovableKey: LOVABLE_API_KEY,
              driveKey: GOOGLE_DRIVE_API_KEY,
            });
            fileLinks[f.field] = up.webViewLink;
          } catch (err) {
            console.error(err);
            // Continue: record failure but keep submission
            fileLinks[f.field] = "UPLOAD_FAILED";
          }
        }

        // Build sheet row in stable column order
        const row: string[] = [
          "=ROW()-1",
          nowIST(),
          ...TEXT_FIELDS.map((k) => data[k] || ""),
          fileLinks.photo || "",
          fileLinks.tenth_marksheet || "",
          fileLinks.twelfth_marksheet || "",
          fileLinks.aadhaar_card || "",
          fileLinks.transfer_certificate || "",
          fileLinks.migration_certificate || "",
          fileLinks.caste_income_certificate || "",
          folderUrl,
        ];

        const sheetsUrl = `${SHEETS_GATEWAY}/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`;
        const sheetsRes = await fetch(sheetsUrl, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${LOVABLE_API_KEY}`,
            "X-Connection-Api-Key": GOOGLE_SHEETS_API_KEY,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ values: [row] }),
        });

        if (!sheetsRes.ok) {
          const text = await sheetsRes.text();
          console.error(`Sheets append failed [${sheetsRes.status}]: ${text}`);
          return Response.json(
            {
              ok: false,
              error: "Failed to record application",
              folderUrl,
            },
            { status: 502, headers: CORS_HEADERS },
          );
        }

        return Response.json(
          { ok: true, folderUrl },
          { headers: CORS_HEADERS },
        );
      },
    },
  },
});
