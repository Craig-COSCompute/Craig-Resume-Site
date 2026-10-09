import type { CardItem } from "./resume";

export type Level = "expert" | "proficient" | "familiar";
export type Skill = { name: string; level: Level };
export type SkillGroup = { title: string; blurb?: string; skills: Skill[] };

export const LEVEL_LABELS: Record<Level, string> = {
  expert: "Expert",
  proficient: "Proficient",
  familiar: "Familiar",
};

// Shorthand so each skill reads as one line: e("App Service"), p("Docker"), f("Cosmos DB")
const e = (name: string): Skill => ({ name, level: "expert" });
const p = (name: string): Skill => ({ name, level: "proficient" });
const f = (name: string): Skill => ({ name, level: "familiar" });

export const technical: SkillGroup[] = [
  {
    title: "Azure Platform",
    blurb:
      "Four years supporting Azure for Microsoft customers as a vendor, with a focus on the web and compute services.",
    skills: [
      e("App Service"), e("Functions"), e("Container Apps"), e("Static Web Apps"),
      e("App Service Environment"), e("App Service Certificates & Domains"),
      p("App Configuration"), p("Application Insights"), p("KQL"), p("Key Vault"),
      p("Azure Monitor"), p("Managed Identity"), p("RBAC"), p("Azure Policy"),
      p("VNet Integration"), p("Private Endpoints"), p("DNS & Custom Domains / TLS"),
      f("App Gateway / Front Door"), p("Docker"), p("Azure Container Registry"),
      f("Storage Accounts"), f("Cosmos DB"), f("Azure SQL"), f("Microsoft Sentinel"),
    ],
  },
  {
    title: "Cloud Engineering & IaC",
    blurb:
      "Six months building customer environments, including migration planning and operational documentation.",
    skills: [
      p("Terraform"), p("Bicep"), p("ARM Templates"), e("Azure CLI"),
      p("Azure DevOps"), f("GitHub Actions"), f("CI/CD Pipelines"),
      p("Environment Design"), p("Cloud Migration Planning"),
    ],
  },
  {
    title: "Security",
    blurb: "Cyber Security associate degree and CompTIA Security+.",
    skills: [
      p("Nmap"), f("Metasploit"), p("Kali Linux"), p("Wireshark"),
      p("Network Security"), f("Vulnerability Assessment"), f("Incident Response"),
      f("Firewall Concepts"), f("Encryption & PKI"), f("NIST Frameworks"),
      p("BitLocker"), p("IAM"),
    ],
  },
  {
    title: "Linux",
    blurb: "Daily driver and home lab. Arch is the favorite, Fedora the most used.",
    skills: [
      p("Arch"), p("Fedora"), f("Ubuntu"), f("Linux Mint"), f("Kali"),
      p("Command Line"), p("Bash Scripting"), p("User & Permission Management"),
      p("systemd"), p("SSH"),
    ],
  },
  {
    title: "Networking",
    skills: [
      p("TCP/IP"), p("DNS"), p("DHCP"), f("VLANs"), f("Subnetting"),
      p("Network Troubleshooting"),
    ],
  },
  {
    title: "Identity & Microsoft 365",
    skills: [
      e("Entra ID"), e("Active Directory (ADUC)"), p("Hybrid Identity"),
      p("Microsoft 365"), p("Exchange Online"), p("Teams"), p("Licensing"),
      p("Group Management"), p("Distribution Lists"), p("Account Recovery"),
    ],
  },
  {
    title: "Endpoint",
    skills: [
      p("Windows"), p("Intune / Autopilot"), p("Device Provisioning"),
      p("Classroom & Lab Tech"), p("Hardware Triage"),
    ],
  },
  {
    title: "Development & Tools",
    skills: [
      p("PowerShell"), p("Python"), f("C#"), f("Java"), p("JavaScript"),
      f("TypeScript / React"), p("Git / GitHub"), p("VS Code"), p("Postman"),
      p("Fiddler"), p("Jira"), p("Microsoft Copilot"),
    ],
  },
];

export const professional: CardItem[] = [
  {
    title: "Technical Communication",
    lines: [
      "Translating complex findings into clear guidance for technical and non-technical audiences, plus user guides, ticket notes, and process templates.",
    ],
  },
  {
    title: "Mentoring & Leadership",
    lines: [
      "Coached engineers and people moving into technical roles through case reviews, knowledge sharing, and interview support.",
    ],
  },
  {
    title: "Escalation Management",
    lines: [
      "Final escalation point across Azure Web App support teams, guiding resolution strategy on complex Tier 2 and Tier 3 cases.",
    ],
  },
  {
    title: "Customer Support",
    lines: [
      "Maintained a 4.9/5.0 CSAT while raising team productivity from 0.30 to 0.50 incidents per day.",
    ],
  },
  {
    title: "Process Improvement",
    lines: [
      "Clearer escalation requirements and service expectations through better documentation and request forms.",
    ],
  },
  {
    title: "Critical Thinking",
    lines: [
      "Working through ambiguous, multi-system problems and coordinating with vendors and internal teams to restore service.",
    ],
  },
];

export const beyond: CardItem[] = [
  {
    title: "Public Speaking",
    lines: ["Ordained minister: comfortable leading and speaking in front of a room."],
  },
  {
    title: "Active Listening & Counseling",
    lines: ["Helping people think through hard situations calmly."],
  },
  {
    title: "Patience Under Pressure",
    lines: ["Raising kids is the ultimate escalation queue."],
  },
];
