/** Site content. Copy is final per the design handoff — edit here, not in templates. */

export interface WorkCard {
  readonly kicker: string;
  readonly kickerTone: 'accent' | 'sage' | 'tan';
  readonly title: string;
  readonly body: string;
  readonly tags: readonly string[];
  /** Alternating card tilt on hover. */
  readonly tilt: -0.4 | 0.4;
}

export const WORK: readonly WorkCard[] = [
  {
    kicker: 'Kapoq · 2021 — now',
    kickerTone: 'accent',
    title: 'Making a brownfield codebase a safe place for AI agents',
    body: "Building Kapoq's AI-assisted development practice — what it takes for coding agents to ship safely: design systems they can read, AGENTS.md instruction bridges, and reusable skills that turn one-off judgment into always-on guardrails.",
    tags: ['Angular', '.NET 9', 'Claude Code', 'MCP'],
    tilt: -0.4,
  },
  {
    kicker: 'HealthStream · 2016 — 21',
    kickerTone: 'sage',
    title: 'A design system an entire ecosystem could agree on',
    body: 'Initiated and led the design system across business units — tokens, coded components, designer-to-developer handoff, and user research to prove it was solving the right problems.',
    tags: ['Design tokens', 'Components', 'Research'],
    tilt: 0.4,
  },
  {
    kicker: 'Cigna-HealthSpring · 2013 — 16',
    kickerTone: 'tan',
    title: 'A portal one million providers rely on',
    body: 'Led the Provider Portal redesign — including on-site visits and customer interviews to inform every decision — and helped nudge a whole org toward design-centric thinking.',
    tags: ['Redesign', 'Field research', '1M+ users'],
    tilt: -0.4,
  },
];

export interface ToolboxItem {
  /** Rendered bold, ahead of the em dash — the depth claim. */
  readonly lead?: string;
  readonly text: string;
  /** Renders in the handwritten face. */
  readonly aside?: boolean;
}

export interface ToolboxColumn {
  readonly label: string;
  readonly tone: 'accent' | 'sage' | 'tan' | 'blue';
  readonly items: readonly ToolboxItem[];
}

export const TOOLBOX: readonly ToolboxColumn[] = [
  {
    label: 'Front end',
    tone: 'accent',
    items: [
      {
        lead: 'Angular, deeply',
        text: '— led the v21 modernization: standalone components, signals, native control flow',
      },
      {
        text: 'TypeScript & RxJS — reactive state design, not just consumption',
      },
      { text: 'Sass, responsive layouts' },
      { text: 'Design systems & a11y — built them at three companies' },
      { text: 'Kendo UI · Bootstrap (led its adoption at Cigna, 2013)' },
    ],
  },
  {
    label: 'Back end',
    tone: 'sage',
    items: [
      {
        lead: '.NET since the early 2000s',
        text: '— Classic ASP → MVC → .NET 9, currently ASP.NET Core in production',
      },
      { text: 'REST API design & review' },
      { text: 'Entity Framework Core' },
      { text: 'SQL Server' },
      { text: 'ClickHouse analytics' },
    ],
  },
  {
    label: 'Design & data viz',
    tone: 'tan',
    items: [
      { text: 'Figma → coded components' },
      { text: 'Design tokens' },
      { text: 'Apache ECharts' },
      { text: 'User research & prototyping' },
    ],
  },
  {
    label: 'AI-assisted dev',
    tone: 'blue',
    items: [
      {
        text: 'Claude Code & Cursor across brownfield and greenfield codebases',
      },
      { text: 'MCP tooling & agent skills' },
      { text: 'AGENTS.md instruction bridges' },
      {
        text: '~5x productivity, every PR still reviewed by a human (me)',
        aside: true,
      },
    ],
  },
];

export interface Role {
  readonly years: string;
  readonly what: string;
  readonly where: string;
  readonly note: string;
}

export const ROLES: readonly Role[] = [
  {
    years: '2021 — now',
    what: 'Senior front-end software developer',
    where: 'Kapoq, Franklin TN',
    note: 'agents, guardrails & design systems',
  },
  {
    years: '2019 — 21',
    what: 'Platform Design Manager',
    where: 'HealthStream',
    note: 'design strategy across business units',
  },
  {
    years: '2016 — 19',
    what: 'Senior Developer, UX',
    where: 'HealthStream',
    note: 'started the design system',
  },
  {
    years: '2013 — 16',
    what: 'Senior Software Developer',
    where: 'Cigna-HealthSpring',
    note: 'the 1M-provider portal',
  },
  {
    years: '2008 — 13',
    what: 'Senior Software Developer',
    where: 'nTelagent',
    note: 'healthcare payments, PCI Level 1',
  },
  {
    years: '2007 — 08',
    what: 'Senior Developer / Dynamics Specialist',
    where: 'Sommet Group',
    note: 'HR portal, n-tier',
  },
  {
    years: '2006 — 07',
    what: 'Senior Software Developer',
    where: 'SAIC',
    note: 'U.S. Navy records systems',
  },
  {
    years: '2004 — 06',
    what: 'Senior Software Developer',
    where: 'Gibson Guitar',
    note: 'yes, that Gibson',
  },
  {
    years: '1999 — 03',
    what: 'Software Developer',
    where: 'DeSai Systems & CED',
    note: 'where it all started',
  },
];

export interface Hobby {
  readonly src: string;
  readonly alt: string;
  readonly placeholder: string;
  readonly caption: string;
}

export const HOBBIES: readonly Hobby[] = [
  {
    src: 'images/hobby-stars.jpg',
    alt: 'A night sky',
    placeholder: 'A night sky shot',
    caption: 'chasing stars ✦',
  },
  {
    src: 'images/hobby-bike.jpg',
    alt: 'Mountain biking',
    placeholder: 'You + your bike',
    caption: 'knobby tires > pavement',
  },
  {
    src: 'images/hobby-photo.jpg',
    alt: 'A favorite photograph',
    placeholder: 'A favorite photograph',
    caption: 'a camera, always',
  },
  {
    src: 'images/hobby-art.jpg',
    alt: 'A watercolor painting',
    placeholder: 'A watercolor of yours',
    caption: 'watercolors on Sunday',
  },
];
