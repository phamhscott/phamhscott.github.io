// projects.ts — the DATA for your portfolio, kept separate from the markup.
// The homepage imports these lists and renders one <ProjectCard> per item.
//
// Projects live in TWO lists so the homepage can show them in two groups:
//   • `projects`   → "Selected work"      (your finished/showable work)
//   • `inProgress` → "Currently building" (work you're actively on)
//
// >> ORDER MATTERS: within each list, the FIRST item shows at the top. Put
//    your strongest work first — that's how the page highlights it. <<
// >> TO ADD A PROJECT: copy a { ... } block into the right list and edit it. <<
// >> TO REMOVE ONE: delete its block. The page updates automatically. <<
// >> When a WIP project ships, move its block from `inProgress` to `projects`. <<

// This `interface` describes the shape of one project. It's how your editor
// knows which fields exist and warns you about typos.
export interface Project {
  title: string;
  description: string;
  tags?: string[]; // optional list of skills/tech, shown as little pills
  url?: string; // optional live / demo link
  repo?: string; // optional source-code link
  status?: string; // optional pill, e.g. "In progress" — for WIP/private work
  caseStudy?: string; // optional link to a detail page, e.g. "/projects/ait"
}

// ---- SELECTED WORK ----  (ordered best-first; top of the list = top of page)
export const projects: Project[] = [
  {
    title: "IssueSight",
    description:
      "An agentic GitHub issue tracker (AIT) built as a VS Code extension. I built the agent-detection backend: an OpenTelemetry + Gemini-hooks receiver that tracks the tokens, models, commits, and tools an AI coding agent uses on an issue.",
    tags: ["VS Code Extension", "Node.js", "OpenTelemetry", "Gemini CLI", "GitHub Issues API", "Jest"],
    status: "Team project",
    // Private repo — the on-site case study stands in for a Code link.
    caseStudy: "/projects/ait",
    url: "https://cse110-sp26-group02.github.io/cse110-sp26-project-site/",
  },
  {
    title: "MatchRoom",
    description:
      "Every match becomes a game your group chat plays together — a social second-screen app for live sports, solo-built for the Hacks United v7 hackathon. An AI producer watches a live match feed and generates micro-predictions in real time, synced across everyone in the room via Supabase Realtime.",
    tags: ["Next.js", "TypeScript", "Supabase Realtime", "Anthropic API", "Zod", "Tailwind"],
    status: "Hackathon project",
    caseStudy: "/projects/matchroom",
    url: "https://matchroom-ten.vercel.app/",
    repo: "https://github.com/phamhscott/matchroom",
  },
  {
    title: "Studio Ghibli Music Generation",
    description:
      "Two machine-learning pipelines trained on solo piano to generate Studio Ghibli / Joe Hisaishi–style music: one symbolic (MIDI via Markov, LSTM, and Transformer models), one continuous (raw audio via a flow-matching generator).",
    tags: ["Python", "PyTorch", "Deep Learning", "numpy"],
    repo: "https://github.com/phamhscott/ghibligeneration",
    url: "https://phamhscott.github.io/ghibligeneration/",
  },
  {
    title: "The End of Silence — Speculative Soundscape",
    description:
      "A speculative-sound project imagining a future where technology has drowned out nature and silence itself. I led it end to end: research, proposal, a graphic score, and producing the final multi-tracked audio piece. From a UCSD course on speculating about the future through sound.",
    tags: ["Sound Design", "Audio Production", "Multi-track Editing", "Speculative Design", "Project Lead"],
    caseStudy: "/projects/sound-speculation",
  },
  {
    title: "College Earnings Data Analysis",
    description:
      "A data analysis of how a college's selectivity and program mix relate to graduates' earnings, across 2,594 institution–major pairs from U.S. College Scorecard data. Key finding: STEM majors out-earn non-STEM at every stage, and the gap widens over time.",
    tags: ["Python", "pandas", "Jupyter", "scikit-learn", "Plotly"],
    repo: "https://github.com/phamhscott/College-Earnings-Data-Analysis",
    url: "https://phamhscott.github.io/College-Earnings-Data-Analysis/",
  },
];

// ---- CURRENTLY BUILDING ----  (work in progress; shown in its own group below)
export const inProgress: Project[] = [
  {
    title: "Social Media Discovery Hub",
    // ↓ Tweak this to your own words — what it does and why it's interesting.
    description:
      "A social media library and discovery hub — save, organize, and surface content across platforms in one place.",
    tags: ["Next.js", "FastAPI", "SQLite"], // add the tech you're using, e.g. "React", "Node"
    status: "In progress",
    // Repo is private for now — add `repo: "..."` here once it's public.
  },
];
