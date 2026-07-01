import React, { useContext } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import SocialLinks from '../components/social/SocialLinks';
import mainImg from '../assets/images/logo.png';
import { aboutParagraph, HERO_TITLES, tagline, location } from '../mock/profile';
import { ScrollContext } from '../context/ScrollContext';
import ScrollToTop from '../components/ScrollToTop';

const smoothTo = (id) => (e) => {
  e.preventDefault();
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
};

export default function HomeHero() {
  const { isScroll, jumpToDown } = useContext(ScrollContext);

  return (
    <section className="hero-bg-glow container mx-auto mt-3 flex min-h-screen flex-col items-center justify-around px-5 md:px-1">
      {/* Floating background orbs — GPU-accelerated, reduced-motion safe */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-blob absolute left-[10%] top-[15%] h-72 w-72 rounded-full bg-violet-500/20 blur-3xl filter dark:bg-violet-500/10" />
        <div className="animate-blob animation-delay-2000 absolute right-[10%] top-[10%] h-64 w-64 rounded-full bg-blue-500/20 blur-3xl filter dark:bg-blue-500/10" />
        <div className="animate-blob animation-delay-3000 absolute bottom-[20%] left-[30%] h-56 w-56 rounded-full bg-fuchsia-500/15 blur-3xl filter dark:bg-fuchsia-500/8" />
        <div className="animate-blob animation-delay-4000 absolute right-[20%] bottom-[15%] h-48 w-48 rounded-full bg-cyan-400/15 blur-3xl filter dark:bg-cyan-400/8" />
      </div>

      <div className="z-10 flex flex-col items-center space-y-5 sm:space-y-7">
        {/* Profile image */}
        <motion.div
          initial={{ y: -80, opacity: 0, scale: 0.8 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ type: 'spring', bounce: 0.4, duration: 1.2, delay: 0.1 }}
        >
          <div className="relative">
            {/* Gradient ring */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-violet-500 via-fuchsia-400 to-blue-400 opacity-70 blur-sm" />
            <Image
              src={mainImg}
              alt="Vignesh Appani"
              width={1500}
              height={1500}
              priority
              className="relative h-48 w-48 rounded-full object-cover shadow-2xl ring-4 ring-white dark:ring-neutral-900 sm:h-56 sm:w-56 lg:h-64 lg:w-64"
            />
          </div>
        </motion.div>

        {/* Name + rotating role */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <h1 className="font-lato text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-blue-500 bg-clip-text text-transparent dark:from-violet-400 dark:via-fuchsia-300 dark:to-blue-300">
              Vignesh.
            </span>
          </h1>

          <p className="mt-3 min-h-[2rem] text-lg font-semibold text-neutral-500 dark:text-neutral-400 sm:text-xl">
            <Typewriter
              words={HERO_TITLES}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={55}
              deleteSpeed={35}
              delaySpeed={1800}
            />
          </p>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="text-center text-sm font-semibold text-violet-600 dark:text-violet-400 sm:text-base"
        >
          {tagline}
        </motion.p>

        {/* About */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mx-auto max-w-xl text-center text-sm leading-relaxed text-neutral-600 dark:text-neutral-300 sm:text-base"
        >
          {aboutParagraph}
        </motion.p>

        {/* Location badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.95 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-200/60 bg-white/70 px-4 py-1.5 text-sm text-neutral-600 shadow-sm backdrop-blur-sm dark:border-violet-800/40 dark:bg-neutral-800/70 dark:text-neutral-300">
            <span>📍</span>
            <span>{location}</span>
          </span>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {/* Primary — gradient */}
          <a
            href="#works"
            onClick={smoothTo('#works')}
            className="rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition-all duration-200 hover:scale-105 hover:from-violet-700 hover:to-blue-600 hover:shadow-violet-500/40"
          >
            View Projects
          </a>

          {/* Secondary — glass */}
          <a
            href="/Vignesh_Appani_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-neutral-200 bg-white/80 px-6 py-2.5 text-sm font-semibold text-neutral-700 shadow-sm backdrop-blur-sm transition-all duration-200 hover:border-violet-300 hover:bg-white hover:text-violet-700 dark:border-neutral-700 dark:bg-neutral-800/60 dark:text-neutral-200 dark:hover:border-violet-600 dark:hover:text-violet-300"
          >
            Download Resume
          </a>

          {/* Tertiary — outline */}
          <a
            href="#contact"
            onClick={smoothTo('#contact')}
            className="rounded-xl border-2 border-neutral-300 px-6 py-2.5 text-sm font-semibold text-neutral-700 transition-all duration-200 hover:border-violet-500 hover:text-violet-600 dark:border-neutral-600 dark:text-neutral-200 dark:hover:border-violet-400 dark:hover:text-violet-300"
          >
            Get in Touch
          </a>
        </motion.div>

        <SocialLinks />
      </div>

      {/* Scroll indicator */}
      <div
        id="mouse-scroll"
        className={`ml-4 hidden cursor-pointer transition-all duration-200 ${isScroll ? 'opacity-0' : ''}`}
        onClick={jumpToDown}
      >
        <div className="mouse d border-2 border-solid border-violet-500 dark:border-violet-400">
          <div className="mouse-in bg-violet-500 dark:bg-violet-400" />
        </div>
        <div className="mt-3">
          <span className="down-arrow-1 border-r-2 border-b-2 border-solid border-violet-500 dark:border-violet-400" />
          <span className="down-arrow-2 border-r-2 border-b-2 border-solid border-violet-500 dark:border-violet-400" />
          <span className="down-arrow-3 border-r-2 border-b-2 border-solid border-violet-500 dark:border-violet-400" />
        </div>
      </div>

      <ScrollToTop />
    </section>
  );
}

HomeHero.propTypes = {};
