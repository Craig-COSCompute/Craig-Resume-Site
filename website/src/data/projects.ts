export type ProjectLink = { label: string; href: string; cta?: boolean };

export type Project = {
  title: string;
  status: string;
  summary: string;
  cost?: { value: string; note: string };
  highlights: string[];
  tech: string[];
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    title: "cmarti.org",
    status: "Live",
    summary:
      "This site. My personal portfolio, built from scratch and hosted in Azure with automated deployments from GitHub.",
    cost: { value: "$0 / month", note: "Hosted on the Azure Static Web Apps Free plan" },
    highlights: [
      "Hosted on Azure Static Web Apps, with every push to main deployed through GitHub Actions",
      "Pull requests get their own preview environment before anything goes live",
      "Resume and skills content lives in typed data files, so updates never touch the components",
      "Responsive layout: the collapsible sidebar becomes a bottom tab bar on phones",
      "Custom dark theme built on CSS variables, with no UI framework",
    ],
    tech: [
      "React 19", "TypeScript", "Vite", "React Router", "CSS",
      "Azure Static Web Apps", "GitHub Actions",
    ],
    links: [
      { label: "Visit site", href: "https://cmarti.org" },
      {
        label: "Ask how I host it free on Azure",
        href: "mailto:craig@coscompute.com?subject=Hosting%20a%20site%20on%20Azure%20for%20free",
        cta: true,
      },
      { label: "Source code", href: "https://github.com/Craig-COSCompute/Craig-Resume-Site" },
    ],
  },
];
