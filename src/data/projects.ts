// projects.ts — the DATA for your portfolio, kept separate from the markup.
// The homepage imports this list and renders one <ProjectCard> per item.
//
// >> TO ADD A PROJECT: copy a { ... } block below and edit its fields. <<
// >> TO REMOVE ONE: delete its block. The page updates automatically. <<

// This `interface` describes the shape of one project. It's how your editor
// knows which fields exist and warns you about typos.
export interface Project {
  title: string;
  description: string;
  tags?: string[]; // optional list of skills/tech, shown as little pills
  url?: string; // optional live / demo link
  repo?: string; // optional source-code link
  status?: string; // optional pill, e.g. "In progress" — for WIP/private work
}

export const projects: Project[] = [
  {
    title: "Social Media Discovery Hub",
    // ↓ Tweak this to your own words — what it does and why it's interesting.
    description:
      "A social media library and discovery hub — save, organize, and surface content across platforms in one place.",
    tags: ["Next.js", "FastAPI", "SQLite"], // add the tech you're using, e.g. "React", "Node"
    status: "In progress",
    // Repo is private for now — add `repo: "..."` here once it's public.
  },
  {
    title: "IssueSight",
    description:
      "An agentic GitHub issue tracker built as a VS Code extension. I built the agent-detection layer: token, commit, model, and session tracking, plus hooks and telemetry.",
    tags: ["VS Code Extension", "Node.js", "Gemini API", "GitHub Issues API", "Playwright", "Jest"],
    status: "Team project",
    url: "https://cse110-sp26-group02.github.io/cse110-sp26-project-site/",
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
    title: "College Earnings Data Analysis",
    description:
      "A data analysis of how a college's selectivity and program mix relate to graduates' earnings, across 2,594 institution–major pairs from U.S. College Scorecard data. Key finding: STEM majors out-earn non-STEM at every stage, and the gap widens over time.",
    tags: ["Python", "pandas", "Jupyter", "scikit-learn", "Plotly"],
    repo: "https://github.com/phamhscott/College-Earnings-Data-Analysis",
    url: "https://phamhscott.github.io/College-Earnings-Data-Analysis/",
  }
];
