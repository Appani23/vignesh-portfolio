import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import Iconify from '../components/Iconify';
import ProjectCard from '../components/works/ProjectCard';
import SectionHeader from '../components/SectionHeader';
import LoadAnimate from '../components/animate/LoadAnimate';
import { PROJECTS, PROJECT_CATEGORY, TABS } from '../mock/projects';

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.1, ease: 'easeOut' },
  }),
};

export default function Works() {
  const [currentTab, setCurrentTab] = useState(PROJECT_CATEGORY.ALL);

  const filteredProjects = useMemo(() => {
    if (currentTab === PROJECT_CATEGORY.ALL) return PROJECTS;
    return PROJECTS.filter((p) => Array.isArray(p.category) && p.category.includes(currentTab));
  }, [currentTab]);

  const featuredProjects = useMemo(() => filteredProjects.filter((p) => p.featured), [filteredProjects]);
  const standardProjects = useMemo(() => filteredProjects.filter((p) => !p.featured), [filteredProjects]);

  const activeClass =
    'inline-flex min-w-fit items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-blue-500 px-4 py-2 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:shadow-lg';

  const inActiveClass =
    'inline-flex min-w-fit items-center gap-2 rounded-full border border-neutral-200 bg-white/70 px-4 py-2 text-sm font-semibold text-neutral-700 shadow-sm backdrop-blur-sm transition-all duration-200 hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700 dark:border-neutral-700 dark:bg-neutral-900/60 dark:text-neutral-200 dark:hover:border-violet-600 dark:hover:text-violet-300';

  return (
    <section id="works" className="container mx-auto mt-20 px-5 text-center sm:mt-16 md:px-1 scroll-mt-28">
      <SectionHeader
        kicker="PROJECTS"
        title="My"
        highlight="Works"
        subtitle="A curated selection of professional and personal projects — backend systems, AI integration, and real-world impact."
      />

      <LoadAnimate amount={0}>
        <div className="flex w-full flex-col items-center">
          {/* Tabs */}
          <div className="w-full overflow-x-auto pb-2">
            <ul className="mx-auto flex w-fit gap-2">
              {TABS.map((tab, i) => (
                <li
                  key={`tab-${i}`}
                  onClick={() => setCurrentTab(tab.value)}
                  className={currentTab === tab.value ? activeClass : inActiveClass}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setCurrentTab(tab.value)}
                >
                  <Iconify icon={tab.icon} />
                  <span>{tab.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured */}
          {featuredProjects.length > 0 && (
            <div className="mt-10 w-full">
              <p className="mb-4 text-left text-[10px] font-bold uppercase tracking-[0.25em] text-violet-500 dark:text-violet-400">
                ★ Featured
              </p>
              <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2">
                {featuredProjects.map((project, i) => (
                  <motion.div
                    key={`featured-${i}`}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={cardVariants}
                    className="h-full"
                  >
                    <ProjectCard {...project} />
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Standard */}
          {standardProjects.length > 0 && (
            <div className={`w-full ${featuredProjects.length > 0 ? 'mt-10' : 'mt-8'}`}>
              {featuredProjects.length > 0 && (
                <p className="mb-4 text-left text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-400 dark:text-neutral-500">
                  More Projects
                </p>
              )}
              <div className="grid w-full items-stretch grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {standardProjects.map((project, i) => (
                  <motion.div
                    key={`standard-${i}`}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={cardVariants}
                    className="h-full"
                  >
                    <ProjectCard {...project} />
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {filteredProjects.length === 0 && (
            <div className="mt-10 rounded-2xl border border-neutral-200 bg-white/70 p-8 text-center text-sm text-neutral-600 backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-900/60 dark:text-neutral-300">
              No projects found for this category yet.
            </div>
          )}
        </div>
      </LoadAnimate>
    </section>
  );
}

Works.propTypes = {};
