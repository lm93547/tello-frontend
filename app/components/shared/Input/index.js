/**
 *
 * Input
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import './Input.css';
// import styled from 'styled-components';

function Input({ onChange, title, type }) {
  return (
      <input
        className="input"
        type={type}
        placeholder={title}
        onChange={onChange}
      />
  );
}

Input.propTypes = {
  onChange: PropTypes.func,
  title: PropTypes.string,
  type: PropTypes.string,
};

export default memo(Input);
