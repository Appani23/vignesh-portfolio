import React from 'react';
// Layout
import MainLayout from '../layouts/MainLayout';
// sections
import HomeHero from '../sections/HomeHero';
import Skills from '../sections/Skills';
import Experience from '../sections/Experience';
import Certifications from '../sections/Certifications';
import Works from '../sections/Works';
import Contact from '../sections/Contact';
// mock
import { documentTitle, metaDescription } from '../mock/profile';

// ------------------------------------------------

export default function Home() {
  const meta = (
    <>
      <title>{documentTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={documentTitle} />
      <meta property="og:description" content={metaDescription} />
    </>
  );

  return (
    <MainLayout meta={meta}>
      <HomeHero />
      {/* Skill Section  */}
      <Skills />
      <Experience />
      {/* Works Section  */}
      <Certifications />
      <Works />
      {/* Contact Section  */}
      <Contact />
    </MainLayout>
  );
}
