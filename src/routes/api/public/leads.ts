import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const SPREADSHEET_ID = "1YqVU_8RJT3ZBPwGzUtp3qN1SZNLn2-r1ba9om_rWtKw";
const RANGE = "Sheet1!A:I";
const GATEWAY_URL = "https://connector-gateway.lovable.dev/google_sheets/v4";

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

const LeadSchema = z.object({
  name: z.string().min(1).max(120),
  phone: z.string().min(7).max(20),
  email: z.string().max(160).optional().default(""),
  city: z.string().max(120).optional().default(""),
  program: z.string().max(120).optional().default(""),
  status: z.string().max(120).optional().default(""),
  variant: z.string().max(120).optional().default(""),
  pageUrl: z.string().max(500).optional().default(""),
});

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export const Route = createFileRoute("/api/public/leads")({
  server: {
    handlers: {
      OPTIONS: async () => new Response(null, { status: 204, headers: CORS_HEADERS }),
      POST: async ({ request }) => {
        const LOVABLE_API_KEY = process.env.LOVABLE_API_KEY;
        const GOOGLE_SHEETS_API_KEY = process.env.GOOGLE_SHEETS_API_KEY;
        if (!LOVABLE_API_KEY || !GOOGLE_SHEETS_API_KEY) {
          return Response.json(
            { ok: false, error: "Sheets connector not configured" },
            { status: 500, headers: CORS_HEADERS },
          );
        }

        let body: unknown;
        try {
          body = await request.json();
        } catch {
          return Response.json({ ok: false, error: "Invalid JSON" }, { status: 400, headers: CORS_HEADERS });
        }

        const parsed = LeadSchema.safeParse(body);
        if (!parsed.success) {
          return Response.json(
            { ok: false, error: "Invalid input", details: parsed.error.flatten() },
            { status: 400, headers: CORS_HEADERS },
          );
        }
        const d = parsed.data;
        const row = [
          new Date().toISOString(),
          d.name,
          d.phone,
          d.email,
          d.city,
          d.program,
          d.status,
          d.variant,
          d.pageUrl,
        ];

        const url = `${GATEWAY_URL}/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`;
        const res = await fetch(url, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${LOVABLE_API_KEY}`,
            "X-Connection-Api-Key": GOOGLE_SHEETS_API_KEY,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ values: [row] }),
        });

        if (!res.ok) {
          const text = await res.text();
          console.error(`Sheets append failed [${res.status}]: ${text}`);
          return Response.json(
            { ok: false, error: "Failed to record lead" },
            { status: 502, headers: CORS_HEADERS },
          );
        }

        return Response.json({ ok: true }, { headers: CORS_HEADERS });
      },
    },
  },
});
