import React from 'react';
import Image from 'next/image';
import HeadingAnimate from '../components/animate/HeadingAnimate';
import LoadAnimate from '../components/animate/LoadAnimate';

const CERTIFICATIONS = [
  {
    name: 'AWS Certified Developer – Associate',
    org: 'Amazon Web Services',
    year: '2025',
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

    // add your credential link here if you have it
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

export default function Certifications() {
  return (
    <>
      <div id="certifications" />

      <section className="container mx-auto mt-16 px-5 text-center sm:mt-10 md:px-1">
        <HeadingAnimate>
          <h2 className="mb-3 font-lato text-3xl font-semibold text-primary-700 dark:text-primary-300 sm:text-4xl">
            Certifications
          </h2>
        </HeadingAnimate>

        <p className="mx-auto mb-10 max-w-2xl text-sm text-neutral-600 dark:text-neutral-300 sm:text-base">
          Industry credentials and training that support my backend engineering and cloud expertise.
        </p>

        <LoadAnimate amount={0}>
          <div className="mx-auto grid w-full max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CERTIFICATIONS.map((c, i) => (
              <div
                key={`cert-${i}`}
                className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 text-left shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900"
              >
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary-700/10 blur-2xl transition-opacity group-hover:opacity-80 dark:bg-primary-300/10" />

                <div className="relative z-10 flex items-start gap-4">
                  {/* Badge Image */}
                  <div className="shrink-0">
                    <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl bg-neutral-50 ring-1 ring-neutral-200 dark:bg-neutral-800 dark:ring-neutral-700">
                      <Image src={c.image} alt={`${c.name} badge`} width={56} height={56} className="object-contain" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-base font-semibold leading-snug text-neutral-900 dark:text-neutral-50">
                        {c.name}
                      </h3>

                      <span className="shrink-0 rounded-full bg-primary-700/10 px-3 py-1 text-xs font-semibold text-primary-700 dark:bg-primary-300/10 dark:text-primary-300">
                        {c.tag}
                      </span>
                    </div>

                    <div className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{c.org}</div>

                    <div className="mt-4 flex flex-wrap items-center gap-3">
                      <div className="inline-flex items-center gap-2 rounded-lg bg-neutral-100 px-3 py-1.5 text-xs font-semibold text-neutral-700 dark:bg-neutral-800 dark:text-neutral-200">
                        <span className="h-2 w-2 rounded-full bg-primary-700 dark:bg-primary-300" />
                        {c.year}
                      </div>

                      {/* Credential link button */}
                      {c.url ? (
                        <a
                          href={c.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center rounded-lg bg-primary-700 px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:bg-primary-800 dark:bg-primary-300 dark:text-black dark:hover:bg-primary-400"
                        >
                          View Credential
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </LoadAnimate>
      </section>
    </>
  );
}
