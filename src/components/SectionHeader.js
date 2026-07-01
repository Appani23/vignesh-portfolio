import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeader({ kicker, title, highlight, subtitle }) {
  return (
    <motion.div
      className="mb-10 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      {kicker && (
        <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.25em] text-violet-500 dark:text-violet-400">
          {kicker}
        </p>
      )}

      <h2 className="font-lato text-3xl font-bold sm:text-4xl">
        {title && (
          <span className="text-neutral-900 dark:text-neutral-50">{title} </span>
        )}
        {highlight && (
          <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-blue-500 bg-clip-text text-transparent dark:from-violet-400 dark:via-fuchsia-300 dark:to-blue-300">
            {highlight}
          </span>
        )}
      </h2>

      {/* Accent underline */}
      <div className="mx-auto mt-3 h-[3px] w-16 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-blue-400 section-underline" />

      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-sm text-neutral-600 dark:text-neutral-300 sm:text-base">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
