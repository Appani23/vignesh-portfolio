import { BACKEND_SKILLS, FRONTEND_SKILLS } from './tech-skills';

export const PROJECT_CATEGORY = {
  ALL: 'all',
  FULL_STACK: 'full-stack',
  OPEN_SOURCE: 'open-source',
};

export const TABS = [
  {
    label: 'All',
    value: PROJECT_CATEGORY.ALL,
    icon: 'fluent:tab-desktop-20-regular',
  },
  {
    label: 'Professional',
    value: PROJECT_CATEGORY.FULL_STACK,
    icon: 'bx:briefcase',
  },
  {
    label: 'Open Source',
    value: PROJECT_CATEGORY.OPEN_SOURCE,
    icon: 'fluent-mdl2:open-source',
  },
];

// Safely fetch skill object (can return undefined)
const getSkillByLabel = (skills, techLabel) => skills.find(({ label }) => label === techLabel);

// Remove undefined tech icon entries to avoid runtime errors
const safeIcons = (icons) => icons.filter(Boolean);

export const PROJECTS = [
  {
    imgSrc: '/projects/tax-modernization.png',
    title: 'Tax Modernization Applications (NYS)',
    techIcons: safeIcons([
      { label: 'Java', icon: 'logos:java' },
      { label: 'Spring Boot', icon: 'simple-icons:springboot' },
      getSkillByLabel(BACKEND_SKILLS, 'REST Api'),
      { label: 'SQL Server', icon: 'simple-icons:microsoftsqlserver' },
      getSkillByLabel(BACKEND_SKILLS, 'AWS'),
      getSkillByLabel(BACKEND_SKILLS, 'Docker'),
    ]),
    description:
      'Modernized government tax applications by building secure backend services, improving performance, and supporting cloud deployments. (Private repo)',
    repoLink: '', // keep empty if private
    sourceLink: '',
    category: [PROJECT_CATEGORY.FULL_STACK],
  },

  {
    imgSrc: '/projects/mrs.png',
    title: 'Migration Request System (MRS)',
    techIcons: safeIcons([
      { label: 'Java', icon: 'logos:java' },
      { label: 'Spring Boot', icon: 'simple-icons:springboot' },
      getSkillByLabel(BACKEND_SKILLS, 'REST Api'),
      { label: 'Jenkins', icon: 'simple-icons:jenkins' },
      { label: 'Kubernetes', icon: 'simple-icons:kubernetes' },
    ]),
    description:
      'Built and supported a request workflow system to streamline migration approvals and tracking. (Private repo)',
    repoLink: '',
    sourceLink: '',
    category: [PROJECT_CATEGORY.FULL_STACK],
  },

  {
    imgSrc: '/projects/developer-search.png',
    title: 'Developer Search Platform',
    techIcons: safeIcons([
      getSkillByLabel(FRONTEND_SKILLS, 'React.js'),
      getSkillByLabel(FRONTEND_SKILLS, 'Javascript'),
      { label: 'Java', icon: 'logos:java' },
      { label: 'Spring Boot', icon: 'simple-icons:springboot' },
      getSkillByLabel(BACKEND_SKILLS, 'MySQL'),
    ]),
    description:
      'A developer search platform to discover profiles and filter by skills/stack. Built for fast search and clean UX.',
    repoLink: 'https://github.com/Appani23/DeveloperSearch',
    sourceLink: '',
    category: [PROJECT_CATEGORY.OPEN_SOURCE, PROJECT_CATEGORY.FULL_STACK],
  },

  {
    imgSrc: '/projects/covid.png',
    title: 'COVID-19 Data Analysis',
    techIcons: safeIcons([
      { label: 'Python', icon: 'logos:python' },
      { label: 'Pandas', icon: 'simple-icons:pandas' },
      { label: 'NumPy', icon: 'simple-icons:numpy' },
      { label: 'Matplotlib', icon: 'simple-icons:matplotlib' },
    ]),
    description:
      'Exploratory analysis of COVID-19 data to identify trends and insights using Python-based data tooling and visualizations.',
    repoLink: 'https://github.com/Appani23/covid',
    sourceLink: '',
    category: [PROJECT_CATEGORY.OPEN_SOURCE],
  },

  {
    imgSrc: '/projects/portfolio.png',
    title: 'Portfolio Website (Next.js)',
    techIcons: safeIcons([
      getSkillByLabel(FRONTEND_SKILLS, 'Next.js'),
      getSkillByLabel(FRONTEND_SKILLS, 'React.js'),
      getSkillByLabel(FRONTEND_SKILLS, 'Tailwind CSS'),
    ]),
    description:
      'Personal portfolio built with Next.js and Tailwind to showcase skills, certifications, experience, and projects in a recruiter-friendly layout.',
    repoLink: 'https://github.com/Appani23/vignesh-portfolio',
    sourceLink: '', // later we’ll add Vercel URL
    category: [PROJECT_CATEGORY.OPEN_SOURCE],
  },
];
