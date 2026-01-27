import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
// context
import { ScrollContext } from '../context/ScrollContext';

// ----------------------------------------------------------------------

export default function Header({ darkModeEnabled, toggleMode }) {
  const { jumpToTop } = useContext(ScrollContext);

  const navItemClass =
    'group relative inline-flex items-center justify-center rounded-full px-3.5 py-1.5 text-sm font-semibold text-white/90 transition-all duration-200 hover:text-white';

  return (
    <header className="container mx-auto">
      <nav className="fixed top-0 right-0 z-[1000] flex h-16 w-full items-center justify-between px-4 md:px-[4%]">
        {/* Left: Brand */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, x: -200 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 2, delay: 0.5 }}
        >
          <h3
            className="text-md cursor-pointer font-lato font-semibold tracking-widest text-neutral-100 md:text-2xl"
            onClick={jumpToTop}
          >
            &lt;VIGNESH APPANI /&gt;
          </h3>
        </motion.div>

        {/* Right: Pill + Toggle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, x: 200 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 2, delay: 0.5 }}
        >
          <ul className="flex items-center space-x-3">
            {/* ✅ Pill (constant black, no scroll color change) */}
            <li>
              <div className="relative">
                {/* subtle premium glow behind pill */}
                <div className="pointer-events-none absolute -inset-2 rounded-full bg-violet-600/12 blur-2xl opacity-70" />
                <div className="pointer-events-none absolute -inset-2 rounded-full bg-fuchsia-500/8 blur-2xl opacity-40" />

                <div className="relative flex items-center gap-1 rounded-full border border-white/10 bg-black/80 px-2 py-1 shadow-lg backdrop-blur-xl">
                  {/* Skills */}
                  <a href="#skills" className={navItemClass}>
                    {/* individual underline (only this link on hover) */}
                    <span className="pointer-events-none absolute -bottom-1 left-1/2 h-[3px] w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500 shadow-[0_0_18px_rgba(139,92,246,0.55)] transition-all duration-200 group-hover:w-9" />
                    {/* soft hover chip fill */}
                    <span className="absolute inset-0 rounded-full bg-violet-500/0 transition-all duration-200 group-hover:bg-violet-500/12" />
                    <span className="relative">Skills</span>
                  </a>

                  {/* Experience */}
                  <a href="#experience" className={navItemClass}>
                    <span className="pointer-events-none absolute -bottom-1 left-1/2 h-[3px] w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500 shadow-[0_0_18px_rgba(139,92,246,0.55)] transition-all duration-200 group-hover:w-11" />
                    <span className="absolute inset-0 rounded-full bg-violet-500/0 transition-all duration-200 group-hover:bg-violet-500/12" />
                    <span className="relative">Experience</span>
                  </a>

                  {/* Certifications */}
                  <a href="#certifications" className={navItemClass}>
                    <span className="pointer-events-none absolute -bottom-1 left-1/2 h-[3px] w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500 shadow-[0_0_18px_rgba(139,92,246,0.55)] transition-all duration-200 group-hover:w-12" />
                    <span className="absolute inset-0 rounded-full bg-violet-500/0 transition-all duration-200 group-hover:bg-violet-500/12" />
                    <span className="relative">Certifications</span>
                  </a>

                  {/* Works */}
                  <a href="#works" className={navItemClass}>
                    <span className="pointer-events-none absolute -bottom-1 left-1/2 h-[3px] w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500 shadow-[0_0_18px_rgba(139,92,246,0.55)] transition-all duration-200 group-hover:w-8" />
                    <span className="absolute inset-0 rounded-full bg-violet-500/0 transition-all duration-200 group-hover:bg-violet-500/12" />
                    <span className="relative">Works</span>
                  </a>

                  {/* Contact */}
                  <a href="#contact" className={navItemClass}>
                    <span className="pointer-events-none absolute -bottom-1 left-1/2 h-[3px] w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500 shadow-[0_0_18px_rgba(139,92,246,0.55)] transition-all duration-200 group-hover:w-10" />
                    <span className="absolute inset-0 rounded-full bg-violet-500/0 transition-all duration-200 group-hover:bg-violet-500/12" />
                    <span className="relative">Contact</span>
                  </a>
                </div>
              </div>
            </li>

            {/* Dark mode button (outside pill) */}
            <li>
              <button
                className="rounded-lg p-2.5 text-sm text-gray-400 transition hover:bg-white/5 hover:text-white focus:outline-none focus:ring-2 focus:ring-violet-500/40"
                onClick={toggleMode}
              >
                {darkModeEnabled ? (
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>
            </li>
          </ul>
        </motion.div>
      </nav>
    </header>
  );
}

// ----------------------------------------------------------------------

Header.propTypes = {
  darkModeEnabled: PropTypes.bool,
  toggleMode: PropTypes.func,
};
