import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import LoadAnimate from '../components/animate/LoadAnimate';
import Iconify from '../components/Iconify';

const EXPERIENCE = [
  {
    company: 'New York State Office of Information Technology Services (ITS)',
    role: 'Java Developer',
    dates: 'Aug 2024 – Present',
    location: 'Albany, NY',
    headline:
      'Modernizing tax platforms with secure Spring Boot microservices, performance improvements, and reliable releases.',
    bullets: [
      'Built & optimized Spring Boot microservices + REST APIs supporting high-availability government systems.',
      'Improved backend responsiveness through smarter data access and performance tuning.',
    ],
    tech: ['Java', 'Spring Boot', 'Microservices', 'REST APIs', 'DB2', 'SQL', 'AEM', 'Git', 'CI/CD'],
    stats: [
      { label: 'Active Users', value: '500K+', icon: 'mdi:account-group-outline' },
      { label: 'Uptime', value: '99.78%', icon: 'mdi:shield-check-outline' },
      { label: 'Response Time', value: '<200ms', icon: 'mdi:timer-outline' },
    ],
  },
  {
    company: 'ITC Infotech',
    role: 'Java Developer',
    dates: 'Jan 2020 – Jul 2022',
    location: 'India',
    headline:
      'Delivered backend services for enterprise workflows with scalable APIs and optimized databases.',
    bullets: [
      'Developed RESTful services using Spring MVC and Hibernate for consistent data operations.',
      'Improved performance with query optimization and containerized deployments.',
    ],
    tech: ['Java', 'Spring MVC', 'Hibernate', 'REST APIs', 'MySQL', 'PostgreSQL', 'Docker', 'Azure'],
    stats: [
      { label: 'APIs', value: 'Enterprise', icon: 'mdi:api' },
      { label: 'Database', value: 'Optimized', icon: 'mdi:database-outline' },
      { label: 'Deployments', value: 'Cloud-ready', icon: 'mdi:cloud-outline' },
    ],
  },
  {
    company: 'Zensar Technologies',
    role: 'Java / J2EE Developer',
    dates: 'Feb 2018 – Dec 2020',
    location: 'India',
    headline:
      'Built reliable backend services and supported production systems with strong stability.',
    bullets: [
      'Implemented Java/Spring MVC applications integrated with MySQL databases.',
      'Maintained production stability with Jira-based delivery and AWS EC2 support.',
    ],
    tech: ['Java', 'J2EE', 'Spring MVC', 'MySQL', 'AWS EC2', 'JUnit', 'Agile'],
    stats: [
      { label: 'Stability', value: 'Improved', icon: 'mdi:check-decagram-outline' },
      { label: 'Production', value: 'Supported', icon: 'mdi:tools' },
      { label: 'Cloud', value: 'AWS Hands-on', icon: 'mdi:server-outline' },
    ],
  },
];

function TechChip({ text }) {
  return (
    <span className="rounded-full border border-neutral-200 bg-white/70 px-3 py-1 text-xs font-semibold text-neutral-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-500/50 hover:bg-violet-500/10 hover:text-violet-700 dark:border-neutral-700 dark:bg-neutral-800/70 dark:text-neutral-200 dark:hover:border-violet-400/50 dark:hover:bg-violet-400/10 dark:hover:text-violet-300">
      {text}
    </span>
  );
}

function StatCard({ label, value, icon }) {
  return (
    <div className="group/stat rounded-2xl border border-neutral-200/70 bg-white/60 p-4 text-center shadow-sm backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:border-violet-500/40 hover:bg-violet-500/5 hover:shadow-lg dark:border-neutral-700/60 dark:bg-neutral-800/50 dark:hover:border-violet-400/40 dark:hover:bg-violet-400/10">
      <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-2xl bg-violet-500/10 transition-all duration-200 group-hover/stat:scale-105 group-hover/stat:bg-violet-500/20 dark:bg-violet-400/10">
        <Iconify
          icon={icon}
          classes="text-xl text-violet-600 transition-all duration-200 group-hover/stat:scale-110 dark:text-violet-300"
        />
      </div>
      <div className="text-lg font-bold text-neutral-900 dark:text-neutral-50">{value}</div>
      <div className="text-xs text-neutral-600 dark:text-neutral-300">{label}</div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="container mx-auto mt-20 px-5 text-center sm:mt-16 md:px-1 scroll-mt-28 pt-2">
      <SectionHeader
        kicker="MY JOURNEY"
        title="Work"
        highlight="Experience"
        subtitle="Building reliable backend systems, scalable APIs, and modern enterprise platforms."
      />

      <LoadAnimate amount={0}>
        <div className="mx-auto w-full max-w-6xl text-left space-y-6">
          {EXPERIENCE.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true, amount: 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-neutral-200/70 bg-white/70 p-6 shadow-md backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/30 hover:bg-gradient-to-br hover:from-violet-500/[0.03] hover:to-blue-500/[0.03] hover:shadow-xl dark:border-neutral-700/60 dark:bg-neutral-900/60 dark:hover:border-violet-400/30 md:p-8"
            >
              {/* Glow orbs */}
              <div className="pointer-events-none absolute -left-24 -top-24 h-56 w-56 rounded-full bg-violet-500/10 blur-3xl opacity-50 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="pointer-events-none absolute -right-24 -bottom-24 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl opacity-40 group-hover:opacity-80 transition-opacity duration-300" />

              <div className="relative">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 transition-colors duration-200 group-hover:text-violet-700 dark:text-neutral-50 dark:group-hover:text-violet-300">
                      {item.role}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-neutral-600 dark:text-neutral-300">{item.company}</p>
                    <p className="mt-0.5 text-sm text-neutral-400 dark:text-neutral-500">{item.location}</p>
                  </div>
                  <span className="inline-flex items-center self-start rounded-full bg-violet-500/10 px-4 py-1.5 text-xs font-semibold text-violet-700 dark:bg-violet-400/10 dark:text-violet-300">
                    {item.dates}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-neutral-700 dark:text-neutral-200">{item.headline}</p>

                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {item.stats.map((s, i) => <StatCard key={i} {...s} />)}
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tech.map((t, i) => <TechChip key={i} text={t} />)}
                </div>

                <div className="mt-5 space-y-3">
                  {item.bullets.map((b, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-violet-500" />
                      <p className="text-sm text-neutral-700 dark:text-neutral-200">{b}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </LoadAnimate>
    </section>
  );
}
