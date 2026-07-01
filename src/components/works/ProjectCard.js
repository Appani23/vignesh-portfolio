import React from 'react';
import PropTypes from 'prop-types';
import Iconify from '../Iconify';

/* ── FEATURED CARD ──────────────────────────────────────────────────────── */
function FeaturedProjectCard({ imgSrc, title, hook, description, repoLink, techIcons, showWatermark }) {
  return (
    <div className="group relative h-full rounded-2xl p-[1.5px] bg-gradient-to-br from-violet-500/70 via-fuchsia-500/50 to-blue-500/70 shadow-[0_4px_24px_rgba(139,92,246,0.18)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(139,92,246,0.28)]">
      <div className="relative flex h-full flex-col overflow-hidden rounded-[14px] bg-white dark:bg-neutral-900">

        {/* Image / gradient header */}
        <div
          className="relative h-[220px] flex-shrink-0 overflow-hidden"
          style={{
            backgroundImage: imgSrc ? `url(${imgSrc})` : undefined,
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
            backgroundColor: '#1e1b4b',
            transition: 'background-size 0.5s ease',
          }}
        >
          {/* Hover zoom via inner scale (CSS group trick) */}
          <div
            className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-105"
            style={{
              backgroundImage: imgSrc ? `url(${imgSrc})` : undefined,
              backgroundSize: 'cover',
              backgroundPosition: 'center top',
            }}
          />

          {/* Bottom gradient — keeps text readable over any image */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          {/* Top tint for contrast */}
          <div className="absolute inset-0 bg-gradient-to-br from-violet-600/40 via-transparent to-blue-600/30" />

          {/* FuelBuddy watermark — shows when no real screenshot */}
          {showWatermark && (
            <svg
              viewBox="0 0 24 24"
              fill="white"
              className="pointer-events-none absolute bottom-10 right-6 h-32 w-32 opacity-[0.06]"
              aria-hidden="true"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              <circle cx="12" cy="9" r="6" fill="none" stroke="white" strokeWidth="0.5" opacity="0.4" />
            </svg>
          )}

          {/* Glow accents */}
          <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-violet-400/25 blur-2xl" />
          <div className="pointer-events-none absolute -left-10 bottom-0 h-24 w-24 rounded-full bg-fuchsia-400/20 blur-2xl" />

          {/* Featured badge */}
          <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full border border-white/25 bg-white/15 px-3 py-1 text-xs font-bold text-white shadow-sm backdrop-blur-sm">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-yellow-400" />
            Featured
          </div>

          {/* Hook text — bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <p className="text-sm font-semibold italic text-white/90 drop-shadow">"{hook}"</p>
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col p-6">
          <h3 className="mb-3 text-lg font-bold text-gray-900 transition-colors duration-200 group-hover:text-violet-700 dark:text-white dark:group-hover:text-violet-300">
            {title}
          </h3>

          <p className="mb-4 line-clamp-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            {description}
          </p>

          {/* Tech icons */}
          {Array.isArray(techIcons) && techIcons.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {techIcons
                .filter((t) => t && t.icon)
                .map(({ icon, label }, i) => (
                  <span
                    key={i}
                    title={label}
                    className="rounded-lg p-1 opacity-70 transition-all duration-200 hover:opacity-100 hover:bg-violet-500/10 hover:scale-110"
                  >
                    <Iconify classes="text-[22px]" icon={icon} />
                  </span>
                ))}
            </div>
          )}

          {/* CTA */}
          <div className="mt-auto pt-5">
            {repoLink ? (
              <a
                href={repoLink}
                target="_blank"
                rel="noreferrer"
                className="group/btn inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 px-5 py-2 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:from-violet-700 hover:to-blue-600 hover:shadow-[0_6px_20px_rgba(139,92,246,0.45)] hover:scale-[1.02]"
              >
                <Iconify icon="akar-icons:github-fill" classes="text-base" />
                View on GitHub
                <span className="transition-transform duration-200 group-hover/btn:translate-x-1">→</span>
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── STANDARD CARD ──────────────────────────────────────────────────────── */
function StandardProjectCard({ imgSrc, title, hook, description, repoLink, sourceLink, techIcons, isPrivate }) {
  const hasPublicLinks = !isPrivate && ((repoLink && repoLink !== '') || (sourceLink && sourceLink !== ''));

  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200/70 bg-white/70 shadow-md backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-violet-300/50 hover:shadow-[0_12px_40px_rgba(139,92,246,0.12)] dark:border-neutral-700/60 dark:bg-neutral-800/60 dark:hover:border-violet-600/40">

      {/* Hover glow */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: 'radial-gradient(ellipse at top, rgba(139,92,246,0.04) 0%, transparent 70%)' }} />

      {/* Image */}
      <div className="relative h-[148px] flex-shrink-0 overflow-hidden">
        <img
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          src={imgSrc}
          alt={title}
        />
        <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(139,92,246,0.08))' }} />
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-1 line-clamp-2 text-base font-bold text-gray-900 transition-colors duration-200 group-hover:text-violet-700 dark:text-white dark:group-hover:text-violet-300">
          {title}
        </h3>

        {hook && (
          <p className="mb-2 text-xs font-medium italic text-violet-600 dark:text-violet-400">{hook}</p>
        )}

        <p className="mb-3 line-clamp-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
          {description}
        </p>

        {/* Tech icons */}
        {Array.isArray(techIcons) && techIcons.length > 0 && (
          <div className="mt-1 flex flex-wrap gap-2.5">
            {techIcons
              .filter((t) => t && t.icon)
              .map(({ icon, label }, i) => (
                <span
                  key={i}
                  title={label}
                  className="rounded-lg p-0.5 opacity-70 transition-all duration-200 hover:opacity-100 hover:scale-110 hover:bg-violet-500/8 dark:hover:bg-violet-400/8"
                >
                  <Iconify classes="text-lg" icon={icon} />
                </span>
              ))}
          </div>
        )}

        {/* Footer */}
        <div className="mt-auto pt-4">
          {isPrivate ? (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100/80 px-3 py-1.5 text-xs font-semibold text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
              <Iconify icon="mdi:lock-outline" classes="text-sm" />
              Private / Enterprise
            </span>
          ) : hasPublicLinks ? (
            <div className="flex items-center justify-end gap-5">
              {repoLink && (
                <a
                  href={repoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="transform text-neutral-600 transition-all duration-200 hover:scale-110 hover:text-violet-600 dark:text-neutral-300 dark:hover:text-violet-400"
                  aria-label="GitHub Repository"
                >
                  <Iconify classes="text-2xl" icon="akar-icons:github-fill" />
                </a>
              )}
              {sourceLink && (
                <a
                  href={sourceLink}
                  target="_blank"
                  rel="noreferrer"
                  className="transform text-neutral-600 transition-all duration-200 hover:scale-110 hover:text-violet-600 dark:text-neutral-300 dark:hover:text-violet-400"
                  aria-label="Live Demo"
                >
                  <Iconify classes="text-2xl" icon="iconoir:open-new-window" />
                </a>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

/* ── ROUTER ─────────────────────────────────────────────────────────────── */
export default function ProjectCard(props) {
  if (props.featured) return <FeaturedProjectCard {...props} />;
  return <StandardProjectCard {...props} />;
}

ProjectCard.propTypes = {
  imgSrc: PropTypes.string,
  title: PropTypes.string,
  hook: PropTypes.string,
  description: PropTypes.string,
  repoLink: PropTypes.string,
  sourceLink: PropTypes.string,
  techIcons: PropTypes.array,
  featured: PropTypes.bool,
  isPrivate: PropTypes.bool,
  showWatermark: PropTypes.bool,
};
