import React from 'react';
import { motion } from 'framer-motion';
import Iconify from '../components/Iconify';
import SectionHeader from '../components/SectionHeader';
import LoadAnimate from '../components/animate/LoadAnimate';
import {
  BACKEND_SKILLS,
  CLOUD_DEVOPS_SKILLS,
  FRONTEND_SKILLS,
} from '../mock/tech-skills';

function SkillRow({ label, proficiency, icon, iconClasses, index }) {
  return (
    <div className="group rounded-xl border border-neutral-200/70 bg-white/60 px-3 py-2 shadow-sm backdrop-blur-sm transition-all duration-200 hover:-translate-y-[1px] hover:border-violet-300 hover:bg-violet-50/50 hover:shadow-md dark:border-neutral-700/60 dark:bg-neutral-800/50 dark:hover:border-violet-600/50 dark:hover:bg-violet-500/5">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-neutral-100 ring-1 ring-neutral-200 transition group-hover:bg-violet-50 dark:bg-neutral-800 dark:ring-neutral-700 dark:group-hover:bg-violet-500/10">
          <Iconify icon={icon} classes={iconClasses || 'text-2xl'} />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <span className="truncate text-sm font-semibold text-neutral-900 dark:text-neutral-50">
              {label}
            </span>
            <span className="shrink-0 text-xs font-semibold text-neutral-400 dark:text-neutral-500">
              {proficiency}
            </span>
          </div>

          {/* Animated progress bar */}
          <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-700">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-violet-600 to-blue-400 dark:from-violet-400 dark:to-blue-300"
              initial={{ width: '0%' }}
              whileInView={{ width: proficiency }}
              transition={{ duration: 0.75, delay: 0.08 + (index || 0) * 0.07, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.5 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function SkillCard({ title, skills }) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl border border-neutral-200/60 bg-white/70 p-5 shadow-md backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-neutral-700/60 dark:bg-neutral-900/60"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Premium glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-violet-600/10 blur-3xl opacity-50 transition-opacity duration-300 group-hover:opacity-90 dark:bg-violet-400/10" />
      <div className="pointer-events-none absolute -left-20 -bottom-20 h-52 w-52 rounded-full bg-fuchsia-500/10 blur-3xl opacity-30 transition-opacity duration-300 group-hover:opacity-70 dark:bg-fuchsia-400/10" />

      <div className="relative">
        <h3 className="mb-4 bg-gradient-to-r from-violet-600 to-blue-500 bg-clip-text text-base font-bold tracking-wide text-transparent dark:from-violet-400 dark:to-blue-300">
          {title}
        </h3>

        <div className="flex flex-col gap-2">
          {skills.map((s, i) => (
            <SkillRow
              key={`${title}-skill-${i}`}
              label={s.label}
              proficiency={s.proficiency}
              icon={s.icon}
              iconClasses={s.iconClasses}
              index={i}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="container mx-auto mt-20 px-5 text-center sm:mt-16 md:px-1 scroll-mt-24">
      <SectionHeader
        kicker="WHAT I USE"
        title="Skills &"
        highlight="Expertise"
        subtitle="A focused toolkit for building secure, scalable backend systems and modern web applications."
      />

      <LoadAnimate amount={0}>
        <div className="mx-auto grid w-full max-w-6xl gap-5 lg:grid-cols-3">
          <SkillCard title="Frontend & UI" skills={FRONTEND_SKILLS} />
          <SkillCard title="Backend & APIs" skills={BACKEND_SKILLS} />
          <SkillCard title="Cloud, DevOps & AI" skills={CLOUD_DEVOPS_SKILLS} />
        </div>
      </LoadAnimate>
    </section>
  );
}
