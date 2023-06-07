import React from 'react';
import PropTypes from 'prop-types';

export function Section({ title, children }) {
  return (
    <>
      <div className="section">
        {title && title}
        {children}
      </div>
    </>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
