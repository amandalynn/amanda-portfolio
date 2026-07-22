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
    body: "Full-stack on a multi-tenant SaaS platform: Angular v21 components and reactive state, ASP.NET Core APIs on EF Core, SQL Server schema, and ClickHouse queries behind tenant reporting. Alongside it, building Kapoq's AI-assisted development practice: encoding the design system where coding agents actually read it, so what they generate lands on pattern instead of beside it.",
    tags: ['Angular v21', 'ASP.NET Core', 'ClickHouse', 'Claude Code'],
    tilt: -0.4,
  },
  {
    kicker: 'HealthStream · 2016 — 21',
    kickerTone: 'sage',
    title: 'A design system an entire ecosystem could agree on',
    body: 'Started the design system across business units and coded it — tokens, a component library, and the front-end architecture behind the MyTeam dashboard. Research kept it honest about what was worth solving.',
    tags: ['Component library', 'Front-end architecture', 'Design tokens'],
    tilt: 0.4,
  },
  {
    kicker: 'Cigna-HealthSpring · 2013 — 16',
    kickerTone: 'tan',
    title: 'A portal one million providers rely on',
    body: 'Wrote the member portal front to controller in .NET MVC — and designed it. Led the Provider Portal redesign for 1M+ providers, drove Bootstrap adoption across the org, and consulted on UI for 10+ teams.',
    tags: ['.NET MVC', 'Front-end lead', '1M+ users'],
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
        text: '— standalone components, signals and native control flow, through the v21 modernization',
      },
      {
        text: 'TypeScript & RxJS — reactive state design, not just consumption',
      },
      { text: 'React — earlier projects, when it was the right fit' },
      { text: 'Sass, responsive layouts' },
      { text: 'Design systems & a11y — built them at three companies' },
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
        text: 'Keeping generated code on pattern — the design system as guardrails agents can follow',
      },
      {
        text: '~5x productivity — humans still lay eyes on the code',
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
    note: 'front-end dev, agents & design systems',
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
    note: 'started the design system — in code',
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
    alt: 'The Milky Way arcing over a lifeguard tower on a dark beach',
    placeholder: 'A night sky shot',
    caption: 'chasing stars ✦',
  },
  {
    src: 'images/hobby-bike.jpg',
    alt: 'Handlebars of a mountain bike on a wooded singletrack trail',
    placeholder: 'You + your bike',
    caption: 'knobby tires > pavement',
  },
  {
    src: 'images/hobby-photo.jpg',
    alt: 'Amanda holding a camera to her eye, backlit',
    placeholder: 'A favorite photograph',
    caption: 'a camera, always',
  },
  {
    src: 'images/hobby-art.jpg',
    alt: 'A watercolor of a dandelion scattering into splashes of color',
    placeholder: 'A watercolor of yours',
    caption: 'watercolors on Sunday',
  },
];
