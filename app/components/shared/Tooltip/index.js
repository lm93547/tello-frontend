/**
 *
 * Tooltip
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import './style.css';

function Tooltip({ delay, children, direction, content, ...props }) {
  let timeout;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, delay || 400);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <div
      className="Tooltip-Wrapper"
      // When to show the tooltip
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {/* Wrapping */}
      {children}
      {active && (
        <div className={`Tooltip-Tip ${direction || 'top'}`}>
          {/* Content */}
          {content}
        </div>
      )}
    </div>
  );
}

Tooltip.propTypes = {};

export default memo(Tooltip);
