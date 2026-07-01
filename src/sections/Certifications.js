import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionHeader from '../components/SectionHeader';
import LoadAnimate from '../components/animate/LoadAnimate';

const CERTIFICATIONS = [
  {
    name: 'AWS Certified Developer – Associate',
    org: 'Amazon Web Services',
    year: '2026',
    tag: 'Credential',
    image: '/certifications/aws-dev-associate.png',
    url: 'https://www.credly.com/badges/26029eb7-e92b-481e-9366-0a38f794e22c/public_url',
  },
  {
    name: 'IBM Certified Professional Java Developer',
    org: 'IBM',
    year: '2024',
    tag: 'Credential',
    image: '/certifications/ibm-java.png',
    url: 'https://www.credly.com/badges/23148a3b-06d1-4028-9553-81df1e742957/public_url',
  },
  {
    name: 'AWS Certified Cloud Practitioner',
    org: 'Amazon Web Services',
    year: '2024',
    tag: 'Credential',
    image: '/certifications/aws-cloud-practitioner.png',
    url: '',
  },
  {
    name: 'Spring Boot 3 Essential Training',
    org: 'LinkedIn Learning',
    year: '2024',
    tag: 'Training',
    image: '/certifications/spring-boot.png',
    url: '',
  },
  {
    name: 'Apache Kafka Essential Training',
    org: 'LinkedIn Learning',
    year: '2024',
    tag: 'Training',
    image: '/certifications/kafka.png',
    url: '',
  },
  {
    name: 'Introduction to Amazon EC2',
    org: 'Amazon Web Services',
    year: '2024',
    tag: 'Training',
    image: '/certifications/ec2.png',
    url: '',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, delay: i * 0.04, ease: 'easeOut' },
  }),
};

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="container mx-auto mt-20 px-5 text-center sm:mt-16 md:px-1 scroll-mt-28"
    >
      <SectionHeader
        kicker="CREDENTIALS"
        title="My"
        highlight="Certifications"
        subtitle="Industry credentials and training that support my backend engineering and cloud expertise."
      />

      <LoadAnimate amount={0}>
        <div className="mx-auto grid w-full max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATIONS.map((c, i) => (
            <motion.div
              key={`cert-${i}`}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.05, margin: '0px 0px -60px 0px' }}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-2xl border border-neutral-200/60 bg-white p-6 text-left shadow-md md:bg-white/70 md:backdrop-blur-md transition-all duration-300 will-change-transform hover:-translate-y-1 hover:shadow-xl dark:border-neutral-700/60 dark:bg-neutral-900 md:dark:bg-neutral-900/60"
            >
              {/* Glow blobs — hidden on mobile to avoid blur-3xl compositing cost */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-violet-600/10 blur-3xl opacity-50 transition-opacity duration-300 group-hover:opacity-90 dark:bg-violet-400/10 hidden md:block" />
              <div className="pointer-events-none absolute -left-16 -bottom-16 h-48 w-48 rounded-full bg-fuchsia-500/10 blur-3xl opacity-30 transition-opacity duration-300 group-hover:opacity-70 dark:bg-fuchsia-400/10 hidden md:block" />

              <div className="relative z-10 flex items-start gap-4">
                {/* Badge */}
                <div className="shrink-0">
                  <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl bg-neutral-50 ring-1 ring-neutral-200 transition-all duration-200 group-hover:ring-violet-400/50 dark:bg-neutral-800 dark:ring-neutral-700 dark:group-hover:ring-violet-400/30">
                    <Image src={c.image} alt={`${c.name} badge`} width={56} height={56} className="object-contain" />
                  </div>
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-sm font-semibold leading-snug text-neutral-900 dark:text-neutral-50">
                      {c.name}
                    </h3>
                    <span className="shrink-0 rounded-full bg-violet-500/10 px-2.5 py-1 text-xs font-semibold text-violet-700 transition-all duration-200 group-hover:bg-violet-600/15 dark:bg-violet-400/10 dark:text-violet-300">
                      {c.tag}
                    </span>
                  </div>

                  <div className="mt-1.5 text-xs text-neutral-500 dark:text-neutral-400">{c.org}</div>

                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <div className="inline-flex items-center gap-2 rounded-lg bg-neutral-100/80 px-3 py-1.5 text-xs font-semibold text-neutral-700 transition-all duration-200 group-hover:bg-violet-600/10 dark:bg-neutral-800 dark:text-neutral-200 dark:group-hover:bg-violet-400/10">
                      <span className="h-2 w-2 rounded-full bg-violet-500 dark:bg-violet-400" />
                      {c.year}
                    </div>

                    {c.url && (
                      <a
                        href={c.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-lg bg-gradient-to-r from-violet-600 to-blue-500 px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition-all duration-200 hover:from-violet-700 hover:to-blue-600 hover:shadow-md group-hover:shadow-violet-500/25"
                      >
                        View Credential
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </LoadAnimate>
    </section>
  );
}
