import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import Header from './Header';
import ScrollProgressBar from '../components/ScrollProgressBar';
import CustomCursor from '../components/CustomCursor';
import useDarkMode from '../hooks/useDarkMode';

export default function MainLayout({ children, meta }) {
  const { darkModeEnabled, toggleMode } = useDarkMode();

  return (
    <>
      <Head>
        {meta}
        <link rel="icon" type="image/png" sizes="32x32" href="/vikky.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/vikky.png" />
        <link rel="shortcut icon" href="/vikky.png" />
        <link rel="apple-touch-icon" href="/vikky.png" />
      </Head>

      <CustomCursor />
      <ScrollProgressBar />

      <Header darkModeEnabled={darkModeEnabled} toggleMode={toggleMode} />
      <main className="overflow-x-hidden">{children}</main>
    </>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node,
  meta: PropTypes.node,
};
