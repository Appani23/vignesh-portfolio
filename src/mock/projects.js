export const PROJECT_CATEGORY = {
  ALL: 'all',
  AI: 'ai',
  FULL_STACK: 'full-stack',
  OPEN_SOURCE: 'open-source',
  GOVERNMENT: 'government',
};

export const TABS = [
  { label: 'All', value: PROJECT_CATEGORY.ALL, icon: 'fluent:tab-desktop-20-regular' },
  { label: 'AI', value: PROJECT_CATEGORY.AI, icon: 'carbon:machine-learning' },
  { label: 'Full Stack', value: PROJECT_CATEGORY.FULL_STACK, icon: 'bx:briefcase' },
  { label: 'Open Source', value: PROJECT_CATEGORY.OPEN_SOURCE, icon: 'fluent-mdl2:open-source' },
  { label: 'Government', value: PROJECT_CATEGORY.GOVERNMENT, icon: 'mdi:bank-outline' },
];

export const PROJECTS = [
  {
    imgSrc: '/projects/joblens.png',
    title: 'JobLens — AI Job Matching Platform',
    hook: 'AI job matching that actually reads your resume.',
    description:
      'A five-service Spring Boot microservices platform that ingests real job listings from the Adzuna API, uses the Claude API to parse resumes into structured profiles, then scores every job 0–100 against the candidate. Parallel AI scoring with CompletableFuture thread pools, Resilience4j circuit breakers and retries, Kafka, Redis, JWT authentication, and a React 19 + TypeScript + Tailwind frontend.',
    techIcons: [
      { label: 'Java', icon: 'logos:java' },
      { label: 'Spring Boot', icon: 'simple-icons:springboot' },
      { label: 'React', icon: 'vscode-icons:file-type-reactjs' },
      { label: 'TypeScript', icon: 'logos:typescript-icon' },
      { label: 'MySQL', icon: 'logos:mysql' },
      { label: 'Redis', icon: 'logos:redis' },
      { label: 'Kafka', icon: 'simple-icons:apachekafka' },
      { label: 'Docker', icon: 'logos:docker-icon' },
      { label: 'Claude AI', icon: 'simple-icons:anthropic' },
      { label: 'JWT', icon: 'mdi:key-outline' },
    ],
    repoLink: 'https://github.com/Appani23/Joblens',
    sourceLink: '',
    category: [PROJECT_CATEGORY.AI, PROJECT_CATEGORY.FULL_STACK, PROJECT_CATEGORY.OPEN_SOURCE],
    featured: true,
    isPrivate: false,
  },

  {
    imgSrc: '/projects/fuelbuddy.png',
    title: 'FuelBuddy — Fuel Price Finder',
    hook: 'Find the cheapest fuel near you.',
    description:
      'A location-based fuel price finder built on Spring Boot microservices with a React Native iOS app. Three backend services handle location, pricing, and user data, exposing clean REST APIs consumed by the mobile client.',
    techIcons: [
      { label: 'Java', icon: 'logos:java' },
      { label: 'Spring Boot', icon: 'simple-icons:springboot' },
      { label: 'Microservices', icon: 'carbon:microservices-1' },
      { label: 'React Native', icon: 'vscode-icons:file-type-reactjs' },
      { label: 'REST APIs', icon: 'dashicons:rest-api' },
    ],
    repoLink: 'https://github.com/Appani23/FuelBuddy',
    sourceLink: '',
    category: [PROJECT_CATEGORY.FULL_STACK, PROJECT_CATEGORY.OPEN_SOURCE],
    featured: true,
    isPrivate: false,
    showWatermark: true,
  },

  {
    imgSrc: '/projects/portfolio.png',
    title: 'Portfolio Website (Next.js)',
    hook: "The site you're looking at.",
    description:
      'Personal portfolio built with Next.js and Tailwind, featuring a light/dark theme, animated sections, and a recruiter-friendly layout showcasing skills, experience, certifications, and projects.',
    techIcons: [
      { label: 'React', icon: 'vscode-icons:file-type-reactjs' },
      { label: 'Next.js', icon: 'cib:next-js' },
      { label: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
      { label: 'JavaScript', icon: 'logos:javascript' },
      { label: 'Framer Motion', icon: 'simple-icons:framer' },
    ],
    repoLink: 'https://github.com/Appani23/vignesh-portfolio',
    sourceLink: '',
    category: [PROJECT_CATEGORY.OPEN_SOURCE, PROJECT_CATEGORY.FULL_STACK],
    featured: false,
    isPrivate: false,
  },

  {
    imgSrc: '/projects/developer-search.png',
    title: 'Developer Search Platform',
    hook: 'Discover developers by skill and stack.',
    description:
      'A full-stack platform to search developer profiles and filter by skills and tech stack, with a Spring Boot backend, MySQL, and a React frontend built for fast search and clean UX.',
    techIcons: [
      { label: 'Java', icon: 'logos:java' },
      { label: 'Spring Boot', icon: 'simple-icons:springboot' },
      { label: 'React', icon: 'vscode-icons:file-type-reactjs' },
      { label: 'JavaScript', icon: 'logos:javascript' },
      { label: 'MySQL', icon: 'logos:mysql' },
    ],
    repoLink: 'https://github.com/Appani23/DeveloperSearch',
    sourceLink: '',
    category: [PROJECT_CATEGORY.FULL_STACK, PROJECT_CATEGORY.OPEN_SOURCE],
    featured: false,
    isPrivate: false,
  },

  {
    imgSrc: '/projects/covid.png',
    title: 'COVID-19 Data Analysis',
    hook: 'Turning raw data into insight.',
    description:
      'Exploratory analysis of COVID-19 datasets to surface trends and patterns using Python data tooling and clear visualizations.',
    techIcons: [
      { label: 'Python', icon: 'logos:python' },
      { label: 'Pandas', icon: 'simple-icons:pandas' },
      { label: 'NumPy', icon: 'simple-icons:numpy' },
      { label: 'Matplotlib', icon: 'simple-icons:matplotlib' },
    ],
    repoLink: 'https://github.com/Appani23/covid',
    sourceLink: '',
    category: [PROJECT_CATEGORY.OPEN_SOURCE],
    featured: false,
    isPrivate: false,
  },

  {
    imgSrc: '/projects/mrs.png',
    title: 'Migration Request System (NYS)',
    hook: 'Enterprise release management, in-house.',
    description:
      'In-house release management platform for the NY Dept of Tax & Finance, replacing ServiceNow. Multi-stage approval workflow (Draft → QA → Production) with role-based access control, full audit trail, OKTA OAuth2 + ADFS SSO, automated async email notifications, and Spring Cache. Spring Boot + Angular, deployed on Kubernetes/EC2 with Jenkins CI/CD.',
    techIcons: [
      { label: 'Java', icon: 'logos:java' },
      { label: 'Spring Boot', icon: 'simple-icons:springboot' },
      { label: 'Angular', icon: 'logos:angular-icon' },
      { label: 'SQL Server', icon: 'simple-icons:microsoftsqlserver' },
      { label: 'Kubernetes', icon: 'logos:kubernetes' },
      { label: 'Jenkins', icon: 'simple-icons:jenkins' },
    ],
    repoLink: '',
    sourceLink: '',
    category: [PROJECT_CATEGORY.GOVERNMENT, PROJECT_CATEGORY.FULL_STACK],
    featured: false,
    isPrivate: true,
  },
];
