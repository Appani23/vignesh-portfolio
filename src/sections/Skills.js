import React from 'react';
import Iconify from '../components/Iconify';
import HeadingAnimate from '../components/animate/HeadingAnimate';
import LoadAnimate from '../components/animate/LoadAnimate';

import {
  BACKEND_SKILLS,
  CLOUD_DEVOPS_SKILLS,
  FRONTEND_SKILLS,
} from '../mock/tech-skills';

// ----------------------------------------------------------------------

function SkillRow({ label, proficiency, icon, iconClasses }) {
  return (
    <div className="group rounded-xl border border-neutral-200 bg-white px-3 py-2 shadow-sm transition-all duration-200 hover:-translate-y-[1px] hover:border-violet-300 hover:bg-violet-50/30 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-violet-600/50 dark:hover:bg-violet-500/5">
      <div className="flex items-center gap-3">
        {/* icon only */}
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100 ring-1 ring-neutral-200 transition group-hover:bg-violet-50 dark:bg-neutral-800 dark:ring-neutral-700 dark:group-hover:bg-violet-500/10">
          <Iconify icon={icon} classes={iconClasses || 'text-2xl'} />
        </div>

        {/* text + progress */}
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <div className="truncate text-sm font-semibold text-neutral-900 dark:text-neutral-50">
              {label}
            </div>
            <div className="shrink-0 text-xs font-semibold text-neutral-500 dark:text-neutral-400">
              {proficiency}
            </div>
          </div>

          {/* progress bar (always visible) */}
          <div className="mt-1.5 h-1.5 w-full rounded-full bg-neutral-200 dark:bg-neutral-800">
            <div
              className="h-1.5 rounded-full bg-violet-600 transition-all duration-300 dark:bg-violet-400"
              style={{ width: proficiency }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function SkillCard({ title, subtitle, skills }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900">
      {/* premium violet glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-violet-600/10 blur-3xl opacity-50 transition-opacity duration-200 group-hover:opacity-90 dark:bg-violet-400/10" />
      <div className="pointer-events-none absolute -left-20 -bottom-20 h-52 w-52 rounded-full bg-fuchsia-500/10 blur-3xl opacity-30 transition-opacity duration-200 group-hover:opacity-70 dark:bg-fuchsia-400/10" />

      <div className="relative">
        <h3 className="text-lg font-semibold tracking-wide text-primary-700 dark:text-primary-300">
          {title}
        </h3>
        <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-300">
          {subtitle}
        </p>

        {/* tighter vertical spacing */}
        <div className="mt-3 flex flex-col gap-2">
          {skills.map((s, i) => (
            <SkillRow
              key={`${title}-skill-${i}`}
              label={s.label}
              proficiency={s.proficiency}
              icon={s.icon}
              iconClasses={s.iconClasses}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="container mx-auto mt-12 px-5 text-center sm:mt-10 md:px-1 scroll-mt-24"
    >
      <HeadingAnimate>
        <h2 className="mb-2 font-lato text-3xl font-semibold text-primary-700 dark:text-primary-300 sm:text-4xl">
          Skills
        </h2>
      </HeadingAnimate>

      <p className="mx-auto mb-6 max-w-2xl text-sm text-neutral-600 dark:text-neutral-300 sm:text-base">
        A focused toolkit for building secure, scalable backend systems and modern web applications.
      </p>

      <LoadAnimate amount={0}>
        {/* smaller gap between cards */}
        <div className="mx-auto grid w-full max-w-6xl gap-4 lg:grid-cols-3">
          <SkillCard
            title="Frontend & UI"
            subtitle="Modern UI with responsive, clean components."
            skills={FRONTEND_SKILLS}
          />

          <SkillCard
            title="Backend & APIs"
            subtitle="Spring Boot services, microservices, and data layers."
            skills={BACKEND_SKILLS}
          />

          <SkillCard
            title="Cloud, DevOps & Testing"
            subtitle="CI/CD, containers, cloud, and automation."
            skills={CLOUD_DEVOPS_SKILLS}
          />
        </div>
      </LoadAnimate>
    </section>
  );
}
