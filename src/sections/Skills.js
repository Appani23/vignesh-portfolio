import React from 'react';
// components
import AnimatedLottie from '../components/Lottie';
import TechSkillIcon from '../components/skills/TechIcon';
import ListItem from '../components/skills/ListItem';
import HeadingAnimate from '../components/animate/HeadingAnimate';
import LoadAnimate from '../components/animate/LoadAnimate';
// mock
import { BACKEND_DESCRIPTIONS, BACKEND_SKILLS, FRONTEND_DESCRIPTIONS, FRONTEND_SKILLS } from '../mock/tech-skills';
import codingAnimationData from '../mock/lottie/coding.json';
import cloudAnimationData from '../mock/lottie/cloudinfra.json';

// ----------------------------------------------------------------------

export default function Skills() {
  return (
    <>
      {/* Anchor for navbar */}
      <div id="skills" />

      <section className="container mx-auto mt-16 px-5 text-center sm:mt-10 md:px-1">
        <HeadingAnimate>
          <h2 className="mb-3 font-lato text-3xl font-semibold text-primary-700 dark:text-primary-300 sm:text-4xl">
            Skills
          </h2>
        </HeadingAnimate>

        <p className="mx-auto mb-10 max-w-2xl text-sm text-neutral-600 dark:text-neutral-300 sm:text-base">
          A focused toolkit for building secure, scalable backend systems and modern web applications.
        </p>

        {/* Frontend / UI */}
        <LoadAnimate amount={0}>
          <div className="container mx-auto my-10 flex flex-col items-center p-5">
            <div className="mb-8 w-full max-w-lg">
              <AnimatedLottie animationDataFile={codingAnimationData} />
            </div>

            <div className="flex w-full max-w-3xl flex-col items-center text-center">
              <HeadingAnimate>
                <h3 className="mb-4 text-xl font-semibold tracking-wide text-primary-700 dark:text-primary-300 sm:text-2xl">
                  Frontend & UI
                </h3>
              </HeadingAnimate>

              {/* Tech Stack */}
              <div className="my-3 flex flex-wrap justify-center gap-x-6 gap-y-8">
                {FRONTEND_SKILLS.map(({ label, icon, proficiency, iconClasses }, i) => (
                  <TechSkillIcon
                    key={`frontend-skill-${i}`}
                    icon={icon}
                    iconClasses={iconClasses}
                    label={label}
                    proficiency={proficiency}
                  />
                ))}
              </div>

              {/* Description */}
              <div className="mt-8 w-full space-y-5">
                {FRONTEND_DESCRIPTIONS.map((paragraph, i) => (
                  <ListItem key={`frontend-des-${i}`} paragraph={paragraph} />
                ))}
              </div>
            </div>
          </div>
        </LoadAnimate>

        {/* Backend / Platform */}
        <LoadAnimate amount={0}>
          <div className="container mx-auto my-10 flex flex-col items-center p-5">
            <div className="mb-8 w-full max-w-lg">
              <AnimatedLottie animationDataFile={cloudAnimationData} />
            </div>

            <div className="flex w-full max-w-3xl flex-col items-center text-center">
              <HeadingAnimate>
                <h3 className="mb-4 text-xl font-semibold tracking-wide text-primary-700 dark:text-primary-300 sm:text-2xl">
                  Backend, Data & Cloud
                </h3>
              </HeadingAnimate>

              {/* Tech Stack */}
              <div className="my-3 flex flex-wrap justify-center gap-x-6 gap-y-8">
                {BACKEND_SKILLS.map(({ icon, iconClasses, label, proficiency }, i) => (
                  <TechSkillIcon
                    key={`backend-skill-${i}`}
                    icon={icon}
                    iconClasses={iconClasses}
                    label={label}
                    proficiency={proficiency}
                  />
                ))}
              </div>

              {/* Description */}
              <div className="mt-8 w-full space-y-5">
                {BACKEND_DESCRIPTIONS.map((paragraph, i) => (
                  <ListItem key={`backend-des-${i}`} paragraph={paragraph} />
                ))}
              </div>
            </div>
          </div>
        </LoadAnimate>

        {/* Optional Quote Section (can remove if you want) */}
        <div className="container mx-auto px-3 py-10">
          <LoadAnimate amount={0}>
            <div className="mx-auto w-full max-w-2xl text-center">
              <p className="text-base leading-relaxed text-neutral-700 dark:text-neutral-200 sm:text-lg">
                “Most good programmers do programming not because they expect to get paid or get adulation by the public,
                but because it is fun to program.”
              </p>
              <span className="mt-8 mb-2 inline-block h-1 w-10 rounded bg-primary-700 dark:bg-yellow-300" />
              <h4 className="text-sm font-medium tracking-wider text-neutral-800 dark:text-neutral-100">Linus Torvalds</h4>
              <p className="text-neutral-400">Linux Founder</p>
            </div>
          </LoadAnimate>
        </div>
      </section>

      {/* Existing anchor used by navbar */}
      <div id="works" />
    </>
  );
}
