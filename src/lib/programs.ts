import nursingImg from "@/assets/course-nursing.jpg";
import mltImg from "@/assets/course-mlt.jpg";
import mitImg from "@/assets/course-mit.jpg";
import aottImg from "@/assets/course-aott.jpg";
import cardiacImg from "@/assets/course-cardiac.jpg";
import radioImg from "@/assets/course-radio.jpg";
import etctImg from "@/assets/course-etct.jpg";
import bptImg from "@/assets/course-bpt.jpg";

export type QA = { q: string; a: string };
export type Scenario = { title: string; story: string };
export type FeeRow = { label: string; value: string };

export type Program = {
  slug: string;
  short: string;
  name: string;
  duration: string;
  eligibility: string;
  image: string;
  tagline: string;
  about: string;
  highlights: string[];
  careers: string[];
  curriculum: string[];
  // New richer fields
  startingSalary: string;
  experiencedSalary: string;
  internationalSalary?: string;
  marketStats: string[];
  scenarios: Scenario[];
  objections: QA[];
  whyCura: string[];
  jobRoles: string[];
  topRecruiters: string[];
  fees: FeeRow[];
};

export const PROGRAMS: Program[] = [
  {
    slug: "bsc-nursing",
    short: "BSc Nursing",
    name: "Bachelor of Science in Nursing",
    duration: "4 Years Degree (3 Years Classroom + 1 Year Internship)",
    eligibility: "10+2 with PCB · 45% (40% for SC/ST/OBC)",
    image: nursingImg,
    tagline: "India's most in-demand healthcare profession.",
    about:
      "A comprehensive RGUHS-affiliated nursing programme that prepares compassionate, evidence-based clinicians for hospitals across India and abroad. The 1-year mandatory clinical internship inside Cura Hospitals' ICU, OBG, Paediatrics and OT wards means graduates step into staff-nurse roles on day one — not after months of on-the-job adjustment.",
    highlights: [
      "RGUHS-affiliated curriculum",
      "Hands-on rotations across ICU, OBG, Paediatrics, OT & Community",
      "Skill labs with SimMan, OSCE training & Spoken-English coaching",
      "Career-readiness support through Cura Hospitals & 50+ partner hospitals",
    ],
    careers: [
      "Staff Nurse — Multi-speciality hospitals",
      "ICU / Critical Care Nurse",
      "Operation Theatre Nurse",
      "Public Health Nurse / NHM",
      "International nursing (Gulf, UK, Germany after licensure)",
    ],
    curriculum: [
      "Anatomy, Physiology, Biochemistry",
      "Medical-Surgical Nursing I & II",
      "OBG, Paediatric & Community Health Nursing",
      "Mental Health & Nursing Research",
      "1 Year Mandatory Clinical Internship",
    ],
    startingSalary: "₹2.4 – 3.6 LPA (India, fresher)",
    experiencedSalary: "₹6 – 12 LPA (5+ years, ICU / Speciality)",
    internationalSalary: "₹25 – 60 LPA (UK, Germany, Gulf after NCLEX / OET)",
    marketStats: [
      "WHO projects India will face a 2.4 million nursing shortfall by 2030",
      "India has 1.7 nurses per 1,000 people — WHO benchmark is 3.0",
      "UK, Germany, Saudi & UAE are actively recruiting Indian nurses — 50,000+ visas issued in 2024",
      "Every new hospital bed in India requires 3 trained nurses",
    ],
    scenarios: [
      {
        title: "The neighbour's daughter in the Gulf",
        story:
          "Three years after graduating, Sneha from Hubballi cleared her HAAD exam and now earns ₹2.8 lakh/month at a Dubai hospital — sending money home every month for her family's new house.",
      },
      {
        title: "The district hospital staff nurse",
        story:
          "Even in a Tier-3 town, a government staff-nurse role through KPSC pays ₹35,000–45,000/month with full pension benefits — a stable lifelong career within your own city.",
      },
      {
        title: "Nurse-Manager track",
        story:
          "After 8 years in an ICU, an experienced nurse can move to Nursing Superintendent or Quality / Infection-Control Head — ₹15–18 LPA inside India itself.",
      },
    ],
    objections: [
      {
        q: "Nursing means night shifts — is it safe for my daughter?",
        a: "Cura Hospitals follows strict hostel & shift-rotation policies. Female nursing students stay in supervised hostels with 24×7 wardens and CCTV; clinical postings during 1st & 2nd year are day-shift only. Night-shift exposure begins in 3rd year in controlled, senior-supervised settings — the same model used by Manipal and St. John's.",
      },
      {
        q: "Will my child only be cleaning patients?",
        a: "That's an outdated view. A modern staff nurse runs ICU monitors, manages ventilators, administers IV medication, assists in OT and is the doctor's clinical partner. Cleaning is done by separate housekeeping staff — nurses are skilled clinicians.",
      },
      {
        q: "Why nursing instead of MBBS?",
        a: "MBBS requires NEET, 5.5 years + PG and ₹50L+ cost. BSc Nursing is 4 years, ₹4–6L total, no entrance exam, and lets your child start earning at age 22 — with the option to do MSc Nursing or Nurse-Practitioner courses later.",
      },
      {
        q: "Will AI / robots replace nurses?",
        a: "Nursing is one of the most AI-resistant careers. Bedside care, empathy, clinical judgement and hands-on procedures cannot be automated. WHO projects nursing demand will grow, not shrink, through 2040.",
      },
      {
        q: "Is BSc Nursing valid abroad?",
        a: "Yes — an RGUHS BSc Nursing degree is accepted by the UK NMC, German Anerkennung, Saudi SCFHS and UAE DoH after the licensing exam. Cura offers guidance and pathway support for IELTS / OET to help with international migration.",
      },
      {
        q: "What if my child changes their mind after 2 years?",
        a: "BSc Nursing is a science degree — students can move into Hospital Administration (MHA), Public Health (MPH), Clinical Research, or even MBA in Healthcare. The degree opens doors, it never closes them.",
      },
    ],
    whyCura: [
      "Daily clinical exposure inside Cura Hospitals from semester 1 — not just lectures",
      "Dedicated SimMan & OSCE skill labs with senior nurse-educators",
      "Guidance & pathway support for IELTS, OET & NCLEX for international careers",
      "Hospital-integrated training with career-readiness support at Cura Hospitals network",
    ],
    jobRoles: [
      "Staff Nurse (ICU / OT / Ward / Casualty)",
      "Public Health Nurse — NHM, ESI, Railways",
      "School / Industrial / Corporate Nurse",
      "Cruise & Airline Medical Crew",
      "Nurse Educator after MSc",
    ],
    topRecruiters: [
      "Cura Hospitals network",
      "Apollo · Manipal · Narayana · Fortis · Aster",
      "Government — NHM, ESI, Railways, Army Nursing",
      "International — NHS UK, Gulf groups, German hospitals",
    ],
    fees: [
      { label: "Overall Tuition Fee", value: "₹10,00,000 for the full 4-year program" },
    ],
  },
  {
    slug: "bsc-mit",
    short: "BSc MIT",
    name: "BSc Medical Imaging Technology",
    duration: "4 Years Degree (3 Years Classroom + 1 Year Internship)",
    eligibility: "10+2 with PCB / PCM · 45%",
    image: mitImg,
    tagline: "Become the eyes of modern medicine.",
    about:
      "Train on X-Ray, CT, MRI, USG, Cath-lab and DSA equipment inside live diagnostic suites. Imaging technologists are central to every diagnosis in a modern hospital — and demand is rising as imaging shifts from metros to every Tier-2 town.",
    highlights: [
      "Live exposure to GE / Siemens / Philips modalities",
      "Cross-trained in radiation safety & PACS workflow",
      "Internship inside diagnostic centres & tertiary-care hospitals",
      "High demand from diagnostic chains (Aster, Apollo, Manipal)",
    ],
    careers: [
      "X-Ray / CT / MRI Technologist",
      "Cath-Lab & Interventional Radiology Tech",
      "Sonographer (with experience)",
      "Diagnostic Centre Lead",
      "Applications Specialist with imaging OEMs",
    ],
    curriculum: [
      "Radiographic Physics & Anatomy",
      "X-Ray, CT, MRI & USG techniques",
      "Image Processing & PACS",
      "Radiation Safety & QA",
      "1 Year Hospital Internship",
    ],
    startingSalary: "₹2.4 – 3.6 LPA",
    experiencedSalary: "₹7 – 14 LPA (CT/MRI specialists)",
    internationalSalary: "₹35 – 70 LPA (Gulf, Singapore, Australia)",
    marketStats: [
      "India has only 1 radiographer per 65,000 people vs WHO norm of 1 per 10,000",
      "MRI/CT installations growing 18% YoY across Tier-2 cities",
      "Every PMJAY-empanelled hospital needs at least 2 imaging techs",
      "Diagnostic chains (Vijaya, Lucid, Aster) opening 200+ centres/year",
    ],
    scenarios: [
      {
        title: "The CT-tech in your own city",
        story:
          "Every district HQ in Karnataka now has at least one CT scanner — and they all need certified technologists. Salary: ₹30,000–45,000/month, weekends fixed.",
      },
      {
        title: "The OEM career",
        story:
          "After 3 years, technologists move to GE, Siemens or Philips as Applications Specialists — ₹10–18 LPA, India travel, training hospital teams on new machines.",
      },
      {
        title: "Cath-lab specialist",
        story:
          "After 4 years of cath-lab training at Cura, graduates are positioned for interviews at leading Bangalore tertiary hospitals — starting salaries in the ₹3.0–4.5 LPA range.",
      },
    ],
    objections: [
      {
        q: "Is X-Ray radiation dangerous?",
        a: "Modern imaging follows the ALARA principle — lead aprons, dosimeter badges and AERB-monitored exposure limits. Lifetime occupational dose for an imaging tech is lower than a single CT scan. Cura trains every student in radiation safety from semester 1.",
      },
      {
        q: "Won't AI replace radiographers?",
        a: "AI reads images — but a human technologist has to position the patient, set parameters, ensure safety and operate the machine. AI augments the technologist; it cannot replace them. The Royal College of Radiologists has confirmed the same.",
      },
      {
        q: "What's the difference between Radiology and Imaging Technology?",
        a: "A Radiologist (MBBS+MD) reads the image. An Imaging Technologist (BSc MIT) operates the machine and acquires the image. Both are equally essential — and the technologist enters the workforce 6 years earlier at a fraction of the cost.",
      },
      {
        q: "Is there scope in small towns?",
        a: "Every Tier-2/3 town now has at least 2–3 diagnostic centres and a district hospital with X-Ray and CT. The shortage is acute — most rural hospitals hire technologists from outside the district.",
      },
      {
        q: "What is the actual day-to-day work like?",
        a: "Position the patient, set the imaging protocol, run the scan, ensure quality, archive on PACS, hand over to the radiologist. Most centres run two 8-hour shifts — no night work in standalone centres.",
      },
      {
        q: "Why not just do BSc Physics?",
        a: "BSc Physics has no direct healthcare career path. BSc MIT is RGUHS-recognised, clinical, and opens imaging industry roles from day one of internship.",
      },
    ],
    whyCura: [
      "Daily hands-on time on live CT, MRI, X-Ray & USG machines",
      "Cath-lab rotation — rare even in older imaging colleges",
      "AERB-aligned radiation-safety training",
      "Tie-ups with diagnostic chains for structured internship",
    ],
    jobRoles: [
      "X-Ray / CT / MRI Technologist",
      "Mammography & DEXA Technologist",
      "Cath-Lab Interventional Tech",
      "PACS / Tele-Radiology Coordinator",
      "OEM Applications Specialist",
    ],
    topRecruiters: [
      "Cura Hospitals network",
      "Apollo Diagnostics · Vijaya · Lucid · Aster · Manipal",
      "GE Healthcare · Siemens · Philips · Fujifilm",
      "District government hospitals (PMJAY)",
    ],
    fees: [
      { label: "Overall Tuition Fee", value: "₹7,20,000 for the full 4-year program" },
    ],
  },
  {
    slug: "bsc-aott",
    short: "BSc AOTT",
    name: "BSc Anaesthesia & Operation Theatre Technology",
    duration: "4 Years Degree (3 Years Classroom + 1 Year Internship)",
    eligibility: "10+2 with PCB · 45%",
    image: aottImg,
    tagline: "The surgeon's most trusted partner.",
    about:
      "Train inside live operation theatres — assist anaesthetists, manage OT equipment, and learn sterile-zone protocols used in modern surgery. With 50,000+ new surgical beds added each year, AOTT graduates are among the most in-demand allied-health professionals in India.",
    highlights: [
      "Rotations across General, Ortho, Cardiac & Neuro OTs",
      "Live anaesthesia machine & ventilator training",
      "CSSD, sterilisation & infection-control modules",
      "Internship inside live tertiary-care OTs",
    ],
    careers: [
      "OT Technician — Multi-speciality hospitals",
      "Anaesthesia Technologist",
      "Cardiac / Neuro OT Specialist",
      "CSSD In-charge",
      "Day-care surgery centres",
    ],
    curriculum: [
      "Anatomy & Anaesthesia Pharmacology",
      "OT Techniques & Sterilisation",
      "Anaesthesia Equipment & Monitoring",
      "Emergency & Critical Care",
      "1 Year OT Internship",
    ],
    startingSalary: "₹2.2 – 3.4 LPA",
    experiencedSalary: "₹6 – 11 LPA (Cardiac / Neuro OT)",
    internationalSalary: "₹25 – 50 LPA (Gulf surgical centres)",
    marketStats: [
      "India performs 30M+ surgeries annually — growing 12% YoY",
      "Every OT needs minimum 2 OT technicians per shift",
      "OT technician shortage estimated at 1.5L positions nationwide",
      "Day-care surgery centres exploding in Tier-2 cities — orthopaedic, eye, dental",
    ],
    scenarios: [
      {
        title: "The cardiac OT specialist",
        story:
          "After 4 years in a cardiac OT, technicians become indispensable to the surgeon's team — ₹70,000–₹1.1L/month in any Bangalore/Hyderabad cardiac hospital.",
      },
      {
        title: "The Gulf surgical career",
        story:
          "Saudi & UAE require OT technologists for their rapidly expanding hospital network — tax-free salaries of ₹2–4L/month with accommodation.",
      },
      {
        title: "Local district hospital",
        story:
          "Every Taluk hospital now has an OT for C-sections, appendix and ortho cases — government OT technicians earn ₹32,000–40,000/month with full benefits.",
      },
    ],
    objections: [
      {
        q: "Isn't it stressful to be inside surgery every day?",
        a: "Modern OTs are highly protocol-driven. After 6 months of training, students adapt completely. Surgeons depend on a calm, focused OT team — this is a skill that develops naturally during the internship year.",
      },
      {
        q: "What if my child faints at the sight of blood?",
        a: "Initial exposure is gradual — observation first, then assistance. 95%+ of students adapt fully within the first month. Cura's senior anaesthetists run a structured desensitisation programme.",
      },
      {
        q: "Why not become an anaesthesiologist (MBBS+MD)?",
        a: "That's 8–10 years and ₹50L+. AOTT is 4 years, ₹5L, and the technician is the anaesthetist's right hand from age 22 — with the option to do MSc later.",
      },
      {
        q: "Is there enough demand outside metros?",
        a: "Every district hospital, every nursing home with an OT, every dental and eye day-care centre needs trained OT staff. The shortage is most acute in Tier-2/3 cities.",
      },
      {
        q: "Will AI replace OT technicians?",
        a: "Surgical robots still need a trained human team — sterile-zone management, machine setup, instrument handling and patient safety are deeply manual skills. Surgery is one of the most AI-resistant healthcare roles.",
      },
      {
        q: "What about working hours?",
        a: "Most hospitals run 2 OT shifts (morning/evening) of 8 hours each. Emergency surgery is rotated. Day-care centres run 9-to-5 only.",
      },
    ],
    whyCura: [
      "Live OT rotation from semester 2 — Cura runs 8 modular OTs",
      "Anaesthesia machine, ventilator & monitor lab on campus",
      "CSSD & sterile-zone protocol training under senior anaesthetists",
      "Cardiac and neuro OT exposure — rare for an undergraduate course",
    ],
    jobRoles: [
      "OT Technician (General / Ortho / Cardiac / Neuro)",
      "Anaesthesia Technologist",
      "CSSD In-charge",
      "Day-Care Surgery Centre Lead",
      "Surgical-device OEM training roles",
    ],
    topRecruiters: [
      "Cura Hospitals network",
      "Manipal · Apollo · Fortis · Narayana · Aster",
      "Standalone day-care centres (eye, ortho, dental)",
      "Gulf surgical hospitals",
    ],
    fees: [
      { label: "Overall Tuition Fee", value: "₹7,20,000 for the full 4-year program" },
    ],
  },
  {
    slug: "bsc-cct",
    short: "BSc CCT",
    name: "BSc Cardiac Care Technology",
    duration: "4 Years Degree (3 Years Classroom + 1 Year Internship)",
    eligibility: "10+2 with PCB · 45%",
    image: cardiacImg,
    tagline: "Be inside the cath-lab from day one.",
    about:
      "Heart disease is India's #1 killer. Cardiac care technologists assist cardiologists in the cath-lab, run ECG / Echo / TMT labs and manage cardiac ICU monitoring. With 200+ new cath-labs added in India every year, this is one of the fastest-growing specialities.",
    highlights: [
      "Hands-on Cath-Lab, ECG, Echo, TMT, Holter training",
      "Pacemaker & angiography assistance modules",
      "Cardiac ICU rotation",
      "Strong demand — every Tier-2 city is adding cath-labs",
    ],
    careers: [
      "Cath-Lab Technologist",
      "Echo / ECG / TMT Technician",
      "Cardiac ICU Monitoring Tech",
      "Pacemaker / Device Specialist",
      "Sales Apps with cardiac-device OEMs",
    ],
    curriculum: [
      "Cardiac Anatomy & Physiology",
      "ECG, Echo, Stress Testing",
      "Cath-Lab Procedures & Haemodynamics",
      "Cardiac Pharmacology & Emergencies",
      "1 Year Cath-Lab Internship",
    ],
    startingSalary: "₹2.6 – 4.0 LPA",
    experiencedSalary: "₹8 – 16 LPA (Cath-lab senior)",
    internationalSalary: "₹40 – 80 LPA (Gulf cardiac centres)",
    marketStats: [
      "India has 28% of global cardiac disease burden — and only 4% of global cath-labs",
      "200+ new cath-labs added per year — mostly in Tier-2 cities",
      "Karnataka alone needs 1,500+ cath-lab technicians by 2027",
      "Cardiac-device OEMs (Medtronic, Abbott, Boston Scientific) actively hiring",
    ],
    scenarios: [
      {
        title: "Cath-lab in your district",
        story:
          "Hubballi, Mysuru, Belagavi, Mangaluru — every Tier-2 city now has 2–3 cardiac centres. A trained cath-lab tech is paid ₹40,000–60,000/month within 1 year of joining.",
      },
      {
        title: "OEM device specialist",
        story:
          "After 3 years cath-lab experience, technologists join Medtronic or Abbott as Clinical Specialists — ₹12–20 LPA, training surgeons on new stents and pacemakers.",
      },
      {
        title: "The Saudi cardiac career",
        story:
          "Saudi & UAE recruit Indian cath-lab techs aggressively — tax-free packages of ₹2.5–4L/month with accommodation.",
      },
    ],
    objections: [
      {
        q: "Is cardiac work too high-pressure for a fresher?",
        a: "Pressure builds with confidence. Cura's 1-year cath-lab internship under senior cardiologists ensures students are fully comfortable before they take a job. By month 6, students confidently run ECG/Echo labs.",
      },
      {
        q: "Won't AI read ECGs automatically?",
        a: "AI flags abnormalities — but a human tech sets up the patient, runs the test, troubleshoots leads and supports cath-lab procedures. None of that is automatable.",
      },
      {
        q: "Why not become a cardiologist?",
        a: "Cardiology is MBBS + MD + DM — 11+ years and ₹1Cr+ in fees. CCT is 4 years and ₹5L, and the technician works alongside the cardiologist from age 22.",
      },
      {
        q: "Is cath-lab radiation dangerous?",
        a: "Cath-lab tech wear lead aprons and thyroid shields. AERB monitors lifetime dose. The risk is significantly lower than older fluoroscopy practices — modern systems use 80% less radiation.",
      },
      {
        q: "Is the demand really that high outside Bangalore?",
        a: "Yes — Karnataka has 60+ cath-labs outside Bangalore now, growing 15% YoY. Every PMJAY hospital is adding cardiac services. The shortage is severe in Tier-2 cities.",
      },
      {
        q: "Will I get bored doing ECG all day?",
        a: "Cardiac work has 6+ modalities — ECG, Echo, TMT, Holter, ABPM, Cath-lab assistance, Pacemaker programming. Most techs rotate across all of them.",
      },
    ],
    whyCura: [
      "Live cath-lab rotation — rare in any undergraduate programme",
      "Echo / TMT / Holter labs on campus",
      "Senior interventional cardiologists as faculty",
      "Direct career pathway into Cura's cardiac centres",
    ],
    jobRoles: [
      "Cath-Lab Technologist (Diagnostic & Interventional)",
      "ECG / Echo / TMT Technician",
      "Pacemaker / Device Clinic Specialist",
      "Cardiac ICU Monitoring Tech",
      "Cardiac-device OEM Clinical Specialist",
    ],
    topRecruiters: [
      "Cura Hospitals network",
      "Narayana Health · Apollo · Fortis · Manipal · Jayadeva",
      "Medtronic · Abbott · Boston Scientific · Biotronik",
      "Tier-2 cardiac centres across Karnataka",
    ],
    fees: [
      { label: "Overall Tuition Fee", value: "₹7,20,000 for the full 4-year program" },
    ],
  },
  {
    slug: "bsc-rtt",
    short: "BSc RTT",
    name: "BSc Radiotherapy Technology",
    duration: "4 Years Degree (3 Years Classroom + 1 Year Internship)",
    eligibility: "10+2 with PCB · 45%",
    image: radioImg,
    tagline: "Front-line of India's cancer-care expansion.",
    about:
      "With cancer cases rising sharply, every new oncology centre needs trained radiotherapy technologists to operate LINAC, simulators and brachytherapy units. RTT is a niche, high-paying speciality — and the demand-supply gap is the widest in allied health.",
    highlights: [
      "LINAC, CT-Simulator & Brachytherapy training",
      "Radiation safety & treatment planning exposure",
      "Internship at oncology centres",
      "Niche, high-paying, recession-proof speciality",
    ],
    careers: [
      "Radiation Therapy Technologist",
      "Treatment Planning Assistant",
      "Brachytherapy Technician",
      "Oncology Centre Lead",
      "Medical Physics support roles",
    ],
    curriculum: [
      "Radiation Physics & Oncology Basics",
      "Treatment Planning & Dosimetry",
      "LINAC & Brachytherapy",
      "Radiation Protection",
      "1 Year Oncology Internship",
    ],
    startingSalary: "₹3.0 – 4.5 LPA",
    experiencedSalary: "₹9 – 18 LPA (LINAC senior)",
    internationalSalary: "₹45 – 90 LPA (Gulf, Singapore oncology)",
    marketStats: [
      "India needs 1 LINAC per 1M people — currently has 1 per 3.5M",
      "1,500+ new LINACs to be installed in India by 2030",
      "Cancer incidence rising 12.8% per year — ICMR data",
      "Most acute shortage in any allied-health speciality — 80%+ unfilled positions",
    ],
    scenarios: [
      {
        title: "The new oncology centre",
        story:
          "Tata Trust, HCG, Apollo and Manipal are opening oncology centres in every Tier-2 city. Each centre needs 4–6 RTTs — and they cannot find them.",
      },
      {
        title: "The Gulf oncology career",
        story:
          "RTT-trained graduates are flown to Riyadh, Dubai and Singapore at packages 6–8× their Indian starting salary.",
      },
      {
        title: "Medical-physics path",
        story:
          "After 5 years, RTTs can pursue MSc Medical Physics and become Treatment Planners — ₹15–25 LPA inside India itself.",
      },
    ],
    objections: [
      {
        q: "Is working with radiation safe long-term?",
        a: "RTT is one of the most monitored professions — every tech wears a TLD badge tracked monthly by AERB. Annual occupational dose limits are 20 mSv (less than 2 CT scans). Lifetime cancer risk for RTTs is statistically the same as the general population.",
      },
      {
        q: "Why such a small course — won't jobs run out?",
        a: "Opposite. RTT seats are deliberately limited because faculty + LINAC access is scarce — that's why salaries are 30–50% higher than other allied-health specialities. Demand far outstrips supply.",
      },
      {
        q: "Working with cancer patients sounds depressing.",
        a: "Modern oncology has 60%+ cure rates for early-stage cancers. RTTs see patients heal and return home cancer-free — it's deeply meaningful work. Many describe it as the most rewarding speciality.",
      },
      {
        q: "Can AI replace radiation therapists?",
        a: "AI helps with treatment planning, but the RTT positions the patient, verifies alignment, operates the LINAC and ensures safety. The physical workflow is fully human.",
      },
      {
        q: "Is there work outside metros?",
        a: "Yes — Tata Memorial, HCG, Apollo Cancer Centres are expanding into Tier-2 cities. Karnataka alone is adding 15+ oncology centres in the next 5 years.",
      },
      {
        q: "Why not pursue MBBS-Oncology?",
        a: "That's MBBS + MD + DM Oncology — 12 years. RTT is 4 years; the technologist works alongside the oncologist from age 22 at strong salaries.",
      },
    ],
    whyCura: [
      "Tie-ups with leading oncology centres for internship & career opportunities",
      "LINAC & CT-Simulator training in 4th year",
      "Senior radiation oncologists as guest faculty",
      "Built-in AERB radiation-safety certification",
    ],
    jobRoles: [
      "Radiation Therapy Technologist",
      "Treatment Planning Assistant",
      "Brachytherapy Technologist",
      "LINAC QA Assistant",
      "Oncology Centre Operations Lead",
    ],
    topRecruiters: [
      "HCG Cancer Centres · Tata Memorial network",
      "Apollo Cancer · Manipal Comprehensive Cancer",
      "Cytecare · Bharath Cancer · Kidwai",
      "International — King Faisal (Saudi), Tawam (UAE)",
    ],
    fees: [
      { label: "Overall Tuition Fee", value: "₹7,20,000 for the full 4-year program" },
    ],
  },
  {
    slug: "bsc-etct",
    short: "BSc ETCT",
    name: "BSc Emergency & Trauma Care Technology",
    duration: "4 Years Degree (3 Years Classroom + 1 Year Internship)",
    eligibility: "10+2 with PCB · 45%",
    image: etctImg,
    tagline: "The first 60 minutes save lives.",
    about:
      "Train as a first-responder for ER, ambulance and trauma units. India's emergency-care workforce is acutely short — and with road accidents, cardiac emergencies and disaster events rising, this is a true high-demand, high-impact speciality.",
    highlights: [
      "BLS, ACLS, ATLS-aligned training",
      "Ambulance & pre-hospital care modules",
      "Live ER & trauma-bay rotations",
      "Disaster-management & triage protocols",
    ],
    careers: [
      "ER / Casualty Technician",
      "Trauma-Care Specialist",
      "Ambulance Critical Care Tech",
      "Industrial / Event medical teams",
      "Disaster-response units",
    ],
    curriculum: [
      "Emergency Medicine Foundations",
      "Trauma & Triage",
      "Pre-hospital & Ambulance Care",
      "Critical Care Procedures",
      "1 Year ER & Trauma Internship",
    ],
    startingSalary: "₹2.4 – 3.6 LPA",
    experiencedSalary: "₹7 – 13 LPA",
    internationalSalary: "₹30 – 60 LPA (Gulf, offshore rigs, cruise lines)",
    marketStats: [
      "India sees 4.5 lakh road accident deaths/year — most preventable with rapid response",
      "Karnataka 108 Ambulance Service alone hires 800+ ETCT graduates/year",
      "Every PMJAY hospital must have a functioning casualty + trauma bay",
      "Indian Army, Navy and Industrial sectors (oil, mining, power) hire ETCTs at premium",
    ],
    scenarios: [
      {
        title: "108 Ambulance Service",
        story:
          "Karnataka GVK-EMRI hires ETCT graduates directly into ambulance EMT roles — ₹30,000–₹42,000/month with shift allowances, government-stable.",
      },
      {
        title: "Industrial medical officer support",
        story:
          "Oil rigs, power plants, mining sites and large factories all require on-site emergency teams — ₹6–12 LPA with food and accommodation.",
      },
      {
        title: "Cruise & offshore careers",
        story:
          "Cruise lines and offshore rigs pay ETCT-trained medics ₹2–3L/month tax-free, with 3-month-on / 3-month-off rotations.",
      },
    ],
    objections: [
      {
        q: "Isn't ER work too traumatic to handle every day?",
        a: "Like any clinical role, exposure is gradual. Cura's curriculum includes mental-health peer-support and structured debriefing — the same protocol used by Indian Armed Forces medics. By the end of internship, students are fully comfortable in high-acuity settings.",
      },
      {
        q: "Are ambulance jobs safe?",
        a: "Modern 108 ambulances are GPS-monitored, with 2 medics + 1 driver. EMTs wear PPE and follow strict safety protocols. Government ambulance services have an excellent safety record.",
      },
      {
        q: "Won't AI / telemedicine replace ER staff?",
        a: "Telemedicine helps doctors consult remotely — but the physical first-response, CPR, airway management, IV access, trauma stabilisation is 100% hands-on. ETCT is one of the most automation-resistant specialities.",
      },
      {
        q: "Is the salary really good for night shifts?",
        a: "ER and ambulance work pays 25–40% more than general nursing roles, with shift differentials, overtime and emergency bonuses. Most ETCTs earn ₹35,000–50,000/month within 2 years.",
      },
      {
        q: "Is there scope outside hospitals?",
        a: "Yes — industrial medical teams, sports event medics, film-set medics, disaster-response teams, Indian Armed Forces, and international offshore work all need ETCTs.",
      },
      {
        q: "What if my child wants to do MBBS later?",
        a: "ETCT is a science degree — students can write NEET while studying (or after graduating). Many ETCTs go on to MBBS / Emergency Medicine MD with strong real-world experience.",
      },
    ],
    whyCura: [
      "ATLS/ACLS-aligned curriculum taught by emergency-medicine consultants",
      "Live ambulance & trauma-bay rotation from semester 3",
      "Disaster-management modules with field simulation",
      "Built-in career pathway into 108 / GVK-EMRI network",
    ],
    jobRoles: [
      "ER / Casualty Technologist",
      "Ambulance EMT (108 / private)",
      "Industrial Medical Team Member",
      "Event & Sports Medic",
      "Disaster-Response Coordinator",
    ],
    topRecruiters: [
      "Cura Hospitals network",
      "108 GVK-EMRI · Manipal Trauma · Apollo ER · Fortis",
      "Industrial — Reliance, Tata Steel, Vedanta, ONGC",
      "Indian Armed Forces, BSF, CISF medical teams",
    ],
    fees: [
      { label: "Overall Tuition Fee", value: "₹7,20,000 for the full 4-year program" },
    ],
  },
  {
    slug: "bsc-mlt",
    short: "BSc MLT",
    name: "BSc Medical Laboratory Technology",
    duration: "4 Years Degree (3 Years Classroom + 1 Year Internship)",
    eligibility: "10+2 with PCB · 45%",
    image: mltImg,
    tagline: "70% of clinical decisions begin in the lab.",
    about:
      "Become a clinical lab scientist — run pathology, biochemistry, microbiology and molecular diagnostics that power every diagnosis. With India's diagnostic industry growing at 15%+ YoY, MLT graduates are in demand across hospitals, diagnostic chains and biotech.",
    highlights: [
      "Hands-on training in Pathology, Biochem, Microbiology, Histo",
      "Molecular diagnostics & blood-bank modules",
      "NABL / lab-quality systems exposure",
      "Diagnostic chains hiring across India",
    ],
    careers: [
      "Medical Lab Technologist",
      "Pathology / Biochem / Microbio specialist",
      "Blood Bank Technician",
      "Molecular Diagnostics Tech",
      "Quality / NABL Auditor",
    ],
    curriculum: [
      "Clinical Biochemistry & Pathology",
      "Microbiology & Immunology",
      "Haematology & Blood Banking",
      "Molecular Diagnostics & QC",
      "1 Year Lab Internship",
    ],
    startingSalary: "₹2.0 – 3.2 LPA",
    experiencedSalary: "₹6 – 12 LPA (Senior / NABL roles)",
    internationalSalary: "₹25 – 55 LPA (Gulf, Singapore)",
    marketStats: [
      "India's diagnostics market: ₹86,000 Cr, growing 15% YoY",
      "Every PMJAY hospital must have NABL-accredited lab — driving hiring",
      "Molecular diagnostics (PCR, NGS) exploding post-COVID",
      "Diagnostic chains (Dr Lal, Metropolis, Thyrocare) opening 500+ collection centres/year",
    ],
    scenarios: [
      {
        title: "Run your own collection centre",
        story:
          "After 5 years, MLT graduates can franchise a Dr Lal Path Labs / Metropolis collection centre — own business, ₹50K–₹1L+/month profit.",
      },
      {
        title: "The hospital lab career",
        story:
          "Every district hospital has a lab — KPSC recruits MLTs at ₹30,000–40,000/month with full pension benefits.",
      },
      {
        title: "Biotech & molecular labs",
        story:
          "MedGenome, Strand Life Sciences, Mapmygenome hire MLTs into NGS and molecular roles — ₹6–10 LPA in Bangalore alone.",
      },
    ],
    objections: [
      {
        q: "Is lab work boring?",
        a: "Modern labs run 200+ tests across automated analysers, PCR machines, NGS sequencers, blood-bank cold chains. It's deeply technical — and the variety is enormous.",
      },
      {
        q: "Will automation replace lab technicians?",
        a: "Machines run tests — but technicians prepare samples, run QC, interpret abnormal results, troubleshoot equipment, and certify reports. NABL standards require human sign-off. Automation augments lab tech; it cannot replace it.",
      },
      {
        q: "What's the difference between DMLT and BSc MLT?",
        a: "DMLT is a 2-year diploma — limited to basic tech roles. BSc MLT is a 4-year degree, RGUHS-recognised, eligible for international jobs, MSc, and senior lab roles. Salary differential is 40–60%.",
      },
      {
        q: "Is there demand outside metros?",
        a: "Yes — every Tier-2/3 town has 5+ diagnostic centres and a district hospital lab. Many MLTs return home and open collection centres in their own town.",
      },
      {
        q: "Won't AI replace pathologists and labs?",
        a: "AI helps in image analysis — but sample collection, processing, staining, machine operation and QC are fully manual. Even AI-augmented labs still need MLTs.",
      },
      {
        q: "Can I move into research or biotech?",
        a: "Absolutely — many MLTs join CSIR labs, IISc, NCBS, biotech startups after MSc. Some pursue PhD in Clinical Biochemistry or Microbiology.",
      },
    ],
    whyCura: [
      "Full pathology, biochem, microbiology, histo & molecular labs on campus",
      "Internship inside NABL-accredited hospital labs",
      "Blood-bank rotation in 3rd year",
      "Direct tie-ups with diagnostic chains for internships & career opportunities",
    ],
    jobRoles: [
      "Medical Lab Technologist (Path / Biochem / Micro)",
      "Blood Bank Technologist",
      "Histopathology / Cytology Tech",
      "Molecular Diagnostics / PCR Tech",
      "NABL Quality Auditor",
    ],
    topRecruiters: [
      "Cura Hospitals network",
      "Dr Lal Path Labs · Metropolis · Thyrocare · SRL · Apollo Diagnostics",
      "Biotech — MedGenome, Strand, Mapmygenome",
      "Government — KPSC, NHM, ESI",
    ],
    fees: [
      { label: "Overall Tuition Fee", value: "₹7,20,000 for the full 4-year program" },
    ],
  },
  {
    slug: "bpt",
    short: "BPT",
    name: "Bachelor of Physiotherapy",
    duration: "4.5 Years Degree (4 Years Classroom + 6 Months Internship)",
    eligibility: "10+2 with PCB · 50%",
    image: bptImg,
    tagline: "Movement is medicine.",
    about:
      "A doctoral-track physiotherapy programme producing rehab specialists for orthopaedic, neuro, sports, cardiopulmonary and paediatric care. Physiotherapists earn the 'Dr.' prefix and can launch independent clinics — making BPT one of the most entrepreneurial healthcare degrees.",
    highlights: [
      "Doctoral title — 'Dr.' prefix",
      "Sports, Ortho, Neuro & Paediatric specialisations",
      "Modern electrotherapy & exercise-therapy labs",
      "Strong scope for independent practice & clinics",
    ],
    careers: [
      "Hospital Physiotherapist",
      "Sports / Fitness Centre Physio",
      "Paediatric / Neuro Rehab Specialist",
      "Independent clinic / home-care practice",
      "International physio (Gulf, UK, Australia)",
    ],
    curriculum: [
      "Anatomy, Physiology, Biomechanics",
      "Exercise & Electrotherapy",
      "Ortho / Neuro / Cardiopulm Physio",
      "Sports & Community Physiotherapy",
      "6 Months Clinical Internship",
    ],
    startingSalary: "₹2.4 – 3.6 LPA (hospital), ₹300–₹800/session (private)",
    experiencedSalary: "₹8 – 18 LPA (Senior / Sports / Neuro)",
    internationalSalary: "₹40 – 90 LPA (Australia, UK, Gulf)",
    marketStats: [
      "India has only 0.59 physios per 10,000 people vs WHO norm of 1 per 10,000",
      "India's home-healthcare market growing 22% YoY — physio is the #1 in-demand role",
      "Sports injuries, post-COVID rehab and elderly care driving 15%+ annual demand",
      "Australia, UK, Canada actively recruiting Indian physios after licensure",
    ],
    scenarios: [
      {
        title: "Open your own clinic",
        story:
          "After 3–4 years experience, a BPT graduate can launch a clinic in their hometown with ₹3–5L investment — and earn ₹80K–₹2L/month within the first year.",
      },
      {
        title: "Sports & cricket academy careers",
        story:
          "Cricket academies, IPL teams, football clubs, gym chains (Cult.Fit, Talwalkars) all hire BPTs — ₹50K–₹1.5L/month + travel.",
      },
      {
        title: "Australia / UK careers",
        story:
          "Indian BPT graduates clearing OET + APC (Australia) earn AUD 75K–95K = ₹40–55L/year. UK HCPC pathway similar.",
      },
    ],
    objections: [
      {
        q: "Is BPT a 'real' medical degree?",
        a: "Yes — BPT is a 4½-year clinical degree under RGUHS. Physiotherapists are recognised by the Government of India as healthcare professionals and use the 'Dr.' prefix. Many orthopaedic recoveries are impossible without physio.",
      },
      {
        q: "Why not become an orthopaedic doctor?",
        a: "Orthopaedics is MBBS + MS — 8–9 years and ₹50L+. BPT is 4.5 years, ₹6–8L, and physios work alongside orthopaedic surgeons in every hospital — plus they can run independent clinics, which doctors cannot easily.",
      },
      {
        q: "Is the salary really competitive vs other allied health?",
        a: "Hospital salary is ₹3–4 LPA fresher — similar to nursing. But unlike nursing, a BPT can do home visits (₹500–1,500/session) and run a clinic. Total monthly income often touches ₹60K–1L within 2 years.",
      },
      {
        q: "Will AI / robots replace physios?",
        a: "Rehab is deeply hands-on — palpation, manual therapy, exercise correction, emotional motivation. AI can supplement (exercise apps, wearables) but never replace. Australia's physio workforce projection grows 17% by 2030.",
      },
      {
        q: "Is there demand in small towns?",
        a: "Yes — every district has a population of 50,000+ elderly with arthritis, stroke survivors, post-surgical patients. Home-care physio is a booming market in Tier-2/3 India.",
      },
      {
        q: "Can I specialise after BPT?",
        a: "Yes — MPT (Sports / Ortho / Neuro / Cardiopulm), Manual Therapy certifications, Dry-Needling, Pilates training. Specialised BPTs earn ₹10–18 LPA in India and ₹50L+ abroad.",
      },
    ],
    whyCura: [
      "Full electrotherapy, exercise-therapy & gait labs on campus",
      "Internship across ortho, neuro, paediatric & cardiopulm OPDs",
      "Sports-physio rotation with affiliated academies",
      "Entrepreneurship support — clinic setup, billing, practice-management",
    ],
    jobRoles: [
      "Hospital Physiotherapist (OPD / Inpatient)",
      "Sports / Fitness / Gym Physio",
      "Paediatric / Neuro Rehab Specialist",
      "Independent Clinic Owner",
      "Home-Care Physiotherapist",
    ],
    topRecruiters: [
      "Cura Hospitals network",
      "Apollo · Manipal · Aster · Fortis · Sakra · BGS Gleneagles",
      "Cult.Fit · Talwalkars · cricket / football academies",
      "Home-care chains — Portea, HealthCare atHOME",
    ],
    fees: [
      { label: "Overall Tuition Fee", value: "₹10,00,000 for the full 4.5-year program" },
    ],
  },
];

export const getProgram = (slug: string) =>
  PROGRAMS.find((p) => p.slug === slug);
