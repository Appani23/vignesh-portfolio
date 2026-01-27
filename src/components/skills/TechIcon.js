import React from 'react';
import PropTypes from 'prop-types';
import Iconify from '../Iconify';

// ----------------------------------------------------------------------

export default function TechSkillIcon({ label, proficiency, icon, iconClasses }) {
  return (
  <div className="flex w-20 flex-col items-center justify-center gap-2 text-center">
    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full p-2 shadow-md shadow-neutral-300 dark:shadow-neutral-700">
      <Iconify icon={icon} classes={iconClasses} />
    </div>

    <div className="text-xs font-medium text-neutral-700 dark:text-neutral-300">{label}</div>

    <div className="h-1.5 w-full rounded-full bg-neutral-200 dark:bg-neutral-800">
      <div className="h-1.5 rounded-full bg-primary-400" style={{ width: proficiency }} />
    </div>
  </div>
);

}

// ----------------------------------------------------------------------

TechSkillIcon.propTypes = {
  label: PropTypes.string,
  proficiency: PropTypes.string,
  icon: PropTypes.string,
  iconClasses: PropTypes.string,
  popoverId: PropTypes.string,
};
