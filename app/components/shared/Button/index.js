/* eslint-disable react/button-has-type */
/**
 *
 * Button
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import './Button.css';
// import styled from 'styled-components';

function Button({ children, type, width, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`button ${className}`}
      style={{ width }}
      type={type}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  width: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default memo(Button);
