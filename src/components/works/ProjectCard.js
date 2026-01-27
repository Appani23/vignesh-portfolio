import React from 'react';
import PropTypes from 'prop-types';
import Iconify from '../Iconify';

export default function ProjectCard({ imgSrc, title, description, repoLink, sourceLink, techIcons }) {
  const hasLinks = (repoLink && repoLink !== '') || (sourceLink && sourceLink !== '');

  return (
    <div
      className="
        group relative h-full overflow-hidden
        flex flex-col rounded-2xl
        border border-gray-200 bg-white shadow-md
        transition-all duration-200 ease-out
        hover:-translate-y-1 hover:shadow-lg
        dark:border-gray-700 dark:bg-neutral-800/70
      "
    >
      {/* Image */}
      <div className="relative">
        <img className="h-[160px] w-full object-cover" src={imgSrc} alt={title} />
        {/* subtle overlay glow (clean, not heavy) */}
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-violet-500/10 blur-2xl" />
          <div className="absolute -left-10 -bottom-10 h-24 w-24 rounded-full bg-fuchsia-500/10 blur-2xl" />
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-2 line-clamp-2 text-lg font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>

        <p className="mb-4 line-clamp-3 text-sm font-normal text-gray-700 dark:text-gray-300">
          {description}
        </p>

        {/* Tech icons */}
        {Array.isArray(techIcons) && techIcons.length > 0 ? (
          <div className="mt-1 flex flex-wrap gap-4">
            {techIcons
              .filter((t) => t && t.icon)
              .map(({ icon }, i) => (
                <span
                  key={`icon-${i}`}
                  className="rounded-xl p-1 transition-all duration-200 group-hover:bg-violet-500/5 dark:group-hover:bg-violet-400/5"
                >
                  <Iconify classes="text-2xl opacity-80" icon={icon} />
                </span>
              ))}
          </div>
        ) : null}

        {/* Footer: pinned to bottom (THIS makes all cards equal height) */}
        {hasLinks ? (
          <div className="mt-auto pt-6">
            <div className="flex items-center justify-end gap-8">
              {repoLink ? (
                <a
                  href={repoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="transform transition-all duration-200 hover:scale-110 hover:text-violet-400"
                  aria-label="GitHub Repository"
                >
                  <Iconify classes="text-2xl" icon="akar-icons:github-fill" />
                </a>
              ) : null}

              {sourceLink ? (
                <a
                  href={sourceLink}
                  target="_blank"
                  rel="noreferrer"
                  className="transform transition-all duration-200 hover:scale-110 hover:text-violet-400"
                  aria-label="Live Demo"
                >
                  <Iconify classes="text-2xl" icon="iconoir:open-new-window" />
                </a>
              ) : null}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  imgSrc: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  repoLink: PropTypes.string,
  sourceLink: PropTypes.string,
  techIcons: PropTypes.array,
};
