# Vignesh Appani — Developer Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-13-black?logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)](https://vignesh-portfolio-beta.vercel.app/)
[![License: MIT](https://img.shields.io/badge/License-MIT-violet.svg)](LICENSE)

**Live demo → [vignesh-portfolio-beta.vercel.app](https://vignesh-portfolio-beta.vercel.app/)**

Personal portfolio of **Vignesh Appani** — Full Stack Java Developer with 6+ years building secure Spring Boot microservices, enterprise government platforms, and AI-powered applications. Currently based in Albany, NY; open to Remote / Hybrid / Relocation.

---

## Tech Stack

| Layer | Tools |
|---|---|
| Framework | Next.js 13 (Pages Router) |
| UI | React 18, Tailwind CSS 3, Framer Motion 7 |
| Icons | @iconify/react |
| Typewriter | react-simple-typewriter |
| Contact form | Formspree (JSON fetch, no server needed) |
| Hosting | Vercel |

---

## Features

- **Animated hero** — gradient name, rotating role typewriter, floating background orbs, 3 CTA buttons
- **Custom cursor** — dot + trailing ring with RAF + `translate3d`, hover states, fine-pointer only, respects `prefers-reduced-motion`
- **Top scroll progress bar** — 3 px gradient bar replaces heavy scroll indicators; `role="progressbar"` for accessibility
- **Projects section** — 6 projects across AI / Full Stack / Open Source / Government category tabs; 2 featured cards with gradient borders
- **Animated skill bars** — `whileInView` progress bars per skill group
- **Dark mode** — system-aware toggle via `useDarkMode` hook, Tailwind `class` strategy
- **Glassmorphism cards** — `backdrop-blur` + translucent backgrounds across Skills, Experience, Certifications, Projects
- **Formspree contact form** — validation, loading/success/error states, honeypot spam protection
- **Smooth scroll** — JS `scrollIntoView` on all nav + CTA links; `html:focus-within` CSS trick avoids macOS trackpad double-scroll lag

---

## Getting Started

### Prerequisites

- Node.js 18+
- yarn (or npm)

### Install & Run

```bash
git clone https://github.com/Appani23/vignesh-portfolio.git
cd vignesh-portfolio
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment Variables

Create a `.env.local` file in the project root (see `.env.local.example`):

```env
# Required — get your own at https://formspree.io/
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/xykqnzko
```

Sign up at [formspree.io](https://formspree.io/), create a new form, and copy the endpoint URL.

---

## Project Structure

```
src/
├── components/
│   ├── CustomCursor.js       # Dot + ring cursor (RAF, fine-pointer only)
│   ├── ScrollProgressBar.js  # 3px top progress bar
│   ├── SectionHeader.js      # Reusable kicker / gradient title / underline
│   ├── works/
│   │   └── ProjectCard.js    # Featured + Standard card variants
│   ├── animate/
│   ├── social/
│   └── Iconify.js
├── layouts/
│   ├── MainLayout.js         # Mounts CustomCursor + ScrollProgressBar + Header
│   └── Header.js
├── mock/                     # All site content lives here
│   ├── profile.js            # Hero text, tagline, location, contact email
│   ├── projects.js           # PROJECTS array + TABS + PROJECT_CATEGORY
│   ├── tech-skills.js        # Skill groups with proficiency %
│   ├── experience.js         # Work history
│   └── certifications.js     # Certifications list
├── sections/
│   ├── HomeHero.js
│   ├── Skills.js
│   ├── Experience.js
│   ├── Works.js
│   ├── Certifications.js
│   └── Contact.js
├── hooks/
│   └── useDarkMode.js
└── styles/
    └── globals.css
public/
└── projects/                 # Project screenshots (joblens.png, covid.png, …)
```

---

## Featured Projects

### JobLens — AI Job Matching Platform
> AI job matching that actually reads your resume.

Five-service Spring Boot microservices platform that ingests real job listings from the Adzuna API, uses the Claude API to parse resumes into structured profiles, then scores every job 0–100 against the candidate. Parallel AI scoring with `CompletableFuture` thread pools, Resilience4j circuit breakers, Kafka, Redis, JWT auth, and a React 19 + TypeScript + Tailwind frontend.

**Stack:** Java · Spring Boot · React · TypeScript · MySQL · Redis · Kafka · Docker · Claude AI · JWT

[View on GitHub →](https://github.com/Appani23/Joblens)

---

### FuelBuddy — Fuel Price Finder
> Find the cheapest fuel near you.

Location-based fuel price finder built on Spring Boot microservices with a React Native iOS app. Three backend services handle location, pricing, and user data, exposing clean REST APIs consumed by the mobile client.

**Stack:** Java · Spring Boot · Microservices · React Native · REST APIs

[View on GitHub →](https://github.com/Appani23/FuelBuddy)

---

## Contact

- **Email:** [vignesh.appani23@gmail.com](mailto:vignesh.appani23@gmail.com)
- **LinkedIn:** [linkedin.com/in/vignesh-appani](https://linkedin.com/in/vignesh-appani)
- **GitHub:** [github.com/Appani23](https://github.com/Appani23)
- **Location:** Albany, NY · Open to Remote / Hybrid / Relocation

---

## License

MIT © [Vignesh Appani](https://github.com/Appani23)
