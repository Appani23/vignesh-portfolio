import React, { useMemo, useState } from 'react';
import Iconify from '../components/Iconify';
import ProjectCard from '../components/works/ProjectCard';
import HeadingAnimate from '../components/animate/HeadingAnimate';
import LoadAnimate from '../components/animate/LoadAnimate';
import { PROJECTS, PROJECT_CATEGORY, TABS } from '../mock/projects';

export default function Works() {
  const [currentTab, setCurrentTab] = useState(PROJECT_CATEGORY.ALL);

  const filteredProjects = useMemo(() => {
    if (currentTab === PROJECT_CATEGORY.ALL) return PROJECTS;
    return PROJECTS.filter((p) => Array.isArray(p.category) && p.category.includes(currentTab));
  }, [currentTab]);

  const activeClass =
    'inline-flex min-w-fit items-center gap-2 rounded-full border border-primary-700 bg-primary-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:shadow-md dark:border-primary-300 dark:bg-primary-300 dark:text-black';

  const inActiveClass =
    'inline-flex min-w-fit items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-semibold text-neutral-700 shadow-sm transition-all duration-200 hover:bg-neutral-50 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-800';

  return (
    <section id="works" className="container mx-auto mt-16 px-5 text-center sm:mt-10 md:px-1 scroll-mt-28">
      <HeadingAnimate>
        <h2 className="mb-3 font-lato text-3xl font-semibold text-primary-700 dark:text-primary-300 sm:text-4xl">
          My Works
        </h2>
      </HeadingAnimate>

      <p className="mx-auto mb-10 max-w-2xl text-sm text-neutral-600 dark:text-neutral-300 sm:text-base">
        A curated selection of professional and personal projects — focused on backend systems, modern web apps, and real-world impact.
      </p>

      <LoadAnimate amount={0}>
        <div className="flex w-full flex-col items-center">
          {/* Tabs */}
          <div className="w-full overflow-x-auto pb-2">
            <ul className="mx-auto flex w-fit gap-3">
              {TABS.map((tab, i) => (
                <li
                  key={`tab-${i}`}
                  onClick={() => setCurrentTab(tab.value)}
                  className={currentTab === tab.value ? activeClass : inActiveClass}
                  role="button"
                  tabIndex={0}
                >
                  <Iconify icon={tab.icon} />
                  <span>{tab.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Grid (stretch items) */}
          <div className="mt-8 grid w-full items-stretch gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProjects.map((project, i) => (
              <div
                key={`project-${i}`}
                className="h-full"
              >
                {/* hover on the card wrapper */}
                <div className="h-full transition-all duration-200 ease-out will-change-transform hover:-translate-y-1 hover:scale-[1.03]">
                  <ProjectCard {...project} />
                </div>
              </div>
            ))}
          </div>

          {/* Empty state */}
          {filteredProjects.length === 0 && (
            <div className="mt-10 rounded-2xl border border-neutral-200 bg-white p-8 text-center text-sm text-neutral-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300">
              No projects found for this category yet.
            </div>
          )}
        </div>
      </LoadAnimate>
    </section>
  );
}

Works.propTypes = {};
