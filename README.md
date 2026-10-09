# cmarti.org

Source for [cmarti.org](https://cmarti.org), the personal portfolio of Craig Martinez: Azure specialist, IT professional, and founder of COSCompute in Colorado Springs, CO.

## Pages

| Page     | What's there                                                              |
| -------- | ------------------------------------------------------------------------- |
| Home     | Intro, current work, and what I'm focused on                              |
| Skills   | Certifications, technical skills by proficiency, and professional skills  |
| Resume   | Experience timeline, education, and the full PDF                          |
| Projects | Things I have built, starting with this site                              |
| Contact  | COSCompute business inquiries, plus personal email and LinkedIn            |

## Tech stack

- [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- [Vite](https://vite.dev) for dev server and builds
- [React Router](https://reactrouter.com) for client-side routing
- Plain CSS with design tokens (no UI framework)
- Hosted on [Azure Static Web Apps](https://learn.microsoft.com/azure/static-web-apps/), deployed with GitHub Actions

## Project structure

```
website/
├── public/                 Static files (resume PDF, favicon, Azure SWA config)
└── src/
    ├── components/         Navbar and shared page building blocks
    ├── data/               Resume, skills, and projects content
    ├── pages/              One component and stylesheet per route
    ├── styles/             Layout and shared component styles
    └── index.css           Design tokens and base styles
```

Site content lives in `src/data/`, so updating the resume, skills, or projects doesn't require touching any components.

## Running locally

Requires Node.js 20.19+ or 22.12+.

```bash
cd website
npm install
npm run dev      # start the dev server
npm run build    # type-check and build to dist/
npm run lint     # run ESLint
```

## Deployment

Every push to `main` builds `website/` and deploys it to Azure Static Web Apps through [the workflow](.github/workflows/azure-static-web-apps-green-stone-0a84f151e.yml). Pull requests get their own preview environment.
