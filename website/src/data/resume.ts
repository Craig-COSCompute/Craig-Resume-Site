// Single source for resume content shown on the site.
// Keep in sync with public/Craig_Martinez_Resume.pdf.

export const RESUME_PDF = "/Craig_Martinez_Resume.pdf";

export type CardItem = { title: string; lines: string[] };

export type Job = {
  role: string;
  org: string;
  dates: string;
  highlights: string[];
};

export const certifications: CardItem[] = [
  { title: "AZ-305", lines: ["Azure Solutions Architect Expert"] },
  { title: "AZ-104", lines: ["Azure Administrator"] },
  { title: "AZ-500", lines: ["Azure Security Engineer"] },
  { title: "Security+", lines: ["CompTIA, expires 06/2027"] },
];

export const education: CardItem[] = [
  {
    title: "B.S. Computer Science",
    lines: ["Western Governors University", "In progress, started 02/2026"],
  },
  {
    title: "A.S. Cyber Security",
    lines: ["Pikes Peak State College", "May 2021"],
  },
];

export const experience: Job[] = [
  {
    role: "IT Service Desk Specialist",
    org: "Pikes Peak State College",
    dates: "07/2025 - Present",
    highlights: [
      "Frontline and escalated support for faculty, staff, and students across Microsoft 365, Windows endpoints, and account access.",
      "Administer hybrid identity issues with ADUC, Entra ID, and Exchange Online, including groups, licensing, and account recovery.",
      "Support Intune/Autopilot, BitLocker, shared devices, and classroom technology.",
      "Write documentation, user guides, and process templates that make escalations clearer.",
    ],
  },
  {
    role: "Cloud Engineer",
    org: "Cyber Husky",
    dates: "03/2025 - 07/2025",
    highlights: [
      "Designed, deployed, and managed secure Azure environments with the portal, Azure CLI, and Terraform.",
      "Supported Azure incidents involving performance, availability, security, and hybrid integration.",
      "Collaborated on migration planning, operational documentation, and Azure Sentinel deployment concepts.",
    ],
  },
  {
    role: "Subject Matter Expert",
    org: "Tek Experts",
    dates: "07/2021 - 03/2025",
    highlights: [
      "Supported App Service, Functions, Container Apps, Static Web Apps, and App Service Environment for Microsoft customers.",
      "Final escalation resource across Azure Web App support teams for complex Tier 2 and Tier 3 cases.",
      "Mentored engineers and non-technical team members moving into technical roles.",
      "Raised productivity from 0.30 to 0.50 incidents per day and survey response rate from 8% to 15% at 4.9/5.0 CSAT.",
    ],
  },
  {
    role: "Tech Internship",
    org: "Manitou School District",
    dates: "02/2021 - 05/2021",
    highlights: [
      "Supported high school and middle school programming classes in Java, JavaScript, and Game Maker Language.",
    ],
  },
];
