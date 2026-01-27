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
      { label: 'REST APIs', icon: 'dashicons:rest-api' },
      { label: 'SQL Server', icon: 'simple-icons:microsoftsqlserver' },
      { label: 'AWS', icon: 'logos:aws' },
      { label: 'Docker', icon: 'logos:docker-icon' },
    ]),
    description:
      'Modernized government tax applications by building secure backend services, improving performance, and supporting cloud deployments. (Private repo)',
    repoLink: '',
    sourceLink: '',
    category: [PROJECT_CATEGORY.FULL_STACK],
  },

  {
    imgSrc: '/projects/mrs.png',
    title: 'Migration Request System (MRS)',
    techIcons: safeIcons([
      { label: 'Java', icon: 'logos:java' },
      { label: 'Spring Boot', icon: 'simple-icons:springboot' },
      { label: 'REST APIs', icon: 'dashicons:rest-api' },
      { label: 'Jenkins', icon: 'simple-icons:jenkins' },
      { label: 'Kubernetes', icon: 'logos:kubernetes' },
    ]),
    description:
      'Built and supported a request workflow system to streamline migration approvals and tracking. (Private repo)',
    repoLink: '',
    sourceLink: '',
    category: [PROJECT_CATEGORY.FULL_STACK],
  },

  // ✅ moved to 3rd position + added React/HTML/CSS icons
  {
    imgSrc: '/projects/portfolio.png',
    title: 'Portfolio Website (Next.js)',
    techIcons: safeIcons([
      getSkillByLabel(FRONTEND_SKILLS, 'React'),
      getSkillByLabel(FRONTEND_SKILLS, 'HTML5'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS3'),
      getSkillByLabel(FRONTEND_SKILLS, 'JavaScript'),
      { label: 'Next.js', icon: 'cib:next-js' }, // reliable icon even if not in your skills list
      { label: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' }, // reliable icon
    ]),
    description:
      'Personal portfolio built with Next.js and Tailwind to showcase skills, certifications, experience, and projects in a recruiter-friendly layout.',
    repoLink: 'https://github.com/Appani23/vignesh-portfolio',
    sourceLink: '',
    category: [PROJECT_CATEGORY.OPEN_SOURCE],
  },

  {
    imgSrc: '/projects/developer-search.png',
    title: 'Developer Search Platform',
    techIcons: safeIcons([
      getSkillByLabel(FRONTEND_SKILLS, 'React'),
      getSkillByLabel(FRONTEND_SKILLS, 'JavaScript'),
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
];
