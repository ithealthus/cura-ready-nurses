import nursingImg from "@/assets/course-nursing.jpg";
import mltImg from "@/assets/course-mlt.jpg";
import mitImg from "@/assets/course-mit.jpg";
import aottImg from "@/assets/course-aott.jpg";
import cardiacImg from "@/assets/course-cardiac.jpg";
import radioImg from "@/assets/course-radio.jpg";
import etctImg from "@/assets/course-etct.jpg";
import bptImg from "@/assets/course-bpt.jpg";

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
      "A comprehensive RGUHS-affiliated nursing programme that prepares compassionate, evidence-based clinicians for hospitals across India and abroad.",
    highlights: [
      "RGUHS-affiliated curriculum",
      "Hands-on rotations across ICU, OBG, Paediatrics, OT & Community",
      "Skill labs with SimMan, OSCE training & Spoken-English coaching",
      "Priority placement at Cura Hospitals & 50+ partner hospitals",
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
      "Train on X-Ray, CT, MRI, USG, Cath-lab and DSA equipment. Imaging technologists are central to every diagnosis in a modern hospital.",
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
      "Train inside live operation theatres — assist anaesthetists, manage OT equipment, and learn sterile-zone protocols used in modern surgery.",
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
      "Heart disease is India's #1 killer. Cardiac care technologists assist cardiologists in the cath-lab, run ECG/Echo/TMT labs and manage cardiac ICU monitoring.",
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
      "With cancer cases rising sharply, every new oncology centre needs trained radiotherapy technologists to operate LINAC, simulators and brachytherapy units.",
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
      "Train as a first-responder for ER, ambulance and trauma units. India's emergency-care workforce is acutely short — a true high-demand speciality.",
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
      "Become a clinical lab scientist — run pathology, biochemistry, microbiology and molecular diagnostics that power every diagnosis.",
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
      "A doctoral-track physiotherapy programme producing rehab specialists for orthopaedic, neuro, sports, cardiopulmonary and paediatric care.",
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
  },
];

export const getProgram = (slug: string) =>
  PROGRAMS.find((p) => p.slug === slug);
