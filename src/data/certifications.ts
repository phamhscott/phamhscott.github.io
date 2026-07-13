// certifications.ts — professional certifications, kept as DATA like the other
// lists. The homepage renders these in a compact "Certifications" section.
// Same idea as projects.ts / coursework.ts: data here, markup in index.astro.
//
// >> TO ADD A CERT: copy a { ... } block below and edit its fields. <<

export interface Certification {
  name: string; // the certification's title
  issuer: string; // who granted it, e.g. "Certiport"
  date: string; // when you earned it, e.g. "May 2023"
  credential?: string; // optional link — a verification page or a PDF in public/
}

export const certifications: Certification[] = [
  {
    name: "Information Technology Specialist — Java",
    issuer: "Certiport",
    date: "May 2023",
    // PDF lives in public/, so it's served from the site root.
    credential: "/certiport-java-specialist.pdf",
  },
];
