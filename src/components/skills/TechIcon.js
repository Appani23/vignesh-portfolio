import React from 'react';
import PropTypes from 'prop-types';
import Iconify from '../Iconify';

export default function TechSkillIcon({ label, proficiency, icon, iconClasses }) {
  return (
    <div
      className="
        group relative w-full
        rounded-2xl border border-neutral-200 bg-white/70 p-4 text-left shadow-sm
        transition-all duration-300
        hover:-translate-y-1 hover:border-violet-500/40 hover:bg-gradient-to-br hover:from-violet-500/[0.06] hover:to-primary-700/[0.04] hover:shadow-xl
        dark:border-neutral-800 dark:bg-neutral-900/70
        dark:hover:border-violet-400/40 dark:hover:from-violet-400/[0.10] dark:hover:to-primary-300/[0.06]
      "
    >
      {/* subtle glow */}
      <div className="pointer-events-none absolute -right-14 -top-14 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl opacity-40 transition group-hover:opacity-80" />
      <div className="pointer-events-none absolute -left-16 -bottom-16 h-40 w-40 rounded-full bg-primary-700/10 blur-3xl opacity-30 transition group-hover:opacity-70" />

      <div className="relative flex items-center gap-3">
        <div
          className="
            flex h-11 w-11 items-center justify-center rounded-2xl
            bg-violet-500/10 transition-all duration-300
            group-hover:scale-105 group-hover:bg-violet-500/20
            dark:bg-violet-400/10 dark:group-hover:bg-violet-400/20
          "
        >
          <Iconify icon={icon} classes={`${iconClasses} text-violet-700 dark:text-violet-300`} />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <p className="truncate text-sm font-semibold text-neutral-900 dark:text-neutral-50">{label}</p>
            <span className="shrink-0 text-xs font-semibold text-neutral-600 dark:text-neutral-300">{proficiency}</span>
          </div>

          <div className="mt-2 h-2 w-full rounded-full bg-neutral-200 dark:bg-neutral-800">
            <div
              className="
                h-2 rounded-full
                bg-gradient-to-r from-violet-600 to-primary-700
                dark:from-violet-400 dark:to-primary-300
                transition-all duration-300
              "
              style={{ width: proficiency }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

TechSkillIcon.propTypes = {
  label: PropTypes.string,
  proficiency: PropTypes.string,
  icon: PropTypes.string,
  iconClasses: PropTypes.string,
};
