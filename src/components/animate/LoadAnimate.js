import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

// Opacity-only reveal on large section wrappers.
// Y transforms on large containers (500px+) fight vertical scroll on the same
// axis — the content lurches up as the user scrolls down, creating resistance.
// Opacity has no layout or positional effect and never conflicts with scroll.
// `once: true` prevents re-animation on scroll-back.
// Negative bottom margin fires the trigger before the section is visible so
// content is already fading in as it enters the viewport.
function LoadAnimate({ children, amount = 0.05 }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      viewport={{ once: true, amount, margin: '0px 0px -80px 0px' }}
    >
      {children}
    </motion.div>
  );
}

LoadAnimate.propTypes = {
  children: PropTypes.node,
  amount: PropTypes.number,
};

export default LoadAnimate;
