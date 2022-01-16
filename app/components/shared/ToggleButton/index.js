/**
 *
 * ToggleButton
 *
 */

import React, { memo, useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.css';

const CheckedIcon = () => (
  <>
    <FiEye />
  </>
);
const UncheckedIcon = () => (
  <>
    <FiEyeOff />
  </>
);

const ToggleButton = props => {
  const [toggle, setToggle] = useState(defaultChecked || false);
  const { defaultChecked, onChange, disabled, className } = props;

  useEffect(() => {
    if (defaultChecked) {
      setToggle(defaultChecked);
    }
  }, [defaultChecked]);

  const triggerToggle = () => {
    if (disabled) {
      return;
    }

    setToggle(!toggle);

    if (typeof onChange === 'function') {
      onChange(!toggle);
    }
  };

  const getIcon = type => {
    const { icons } = props;
    if (!icons) {
      return null;
    }

    return icons[type] === undefined
      ? ToggleButton.defaultProps.icons[type]
      : icons[type];
  };

  const toggleClasses = classNames(
    'wrg-toggle',
    {
      'wrg-toggle--checked': toggle,
      'wrg-toggle--disabled': disabled,
    },
    className,
  );

  const handleTogglePassThru = e => {
    triggerToggle();
    props.onClick(e, toggle);
  };

  return (
    <div onClick={handleTogglePassThru} className={toggleClasses}>
      <div className="wrg-toggle-container">
        <div className="wrg-toggle-uncheck">
          <span>{getIcon('unchecked')}</span>
        </div>
        <div className="wrg-toggle-check">
          <span>{getIcon('checked')}</span>
        </div>
      </div>
      <div
        className={`wrg-toggle-circle ${
          toggle ? 'circle-inactive' : 'circle-active'
        }`}
      />
      <input
        type="checkbox"
        aria-label="Toggle Button"
        className="wrg-toggle-input"
      />
    </div>
  );
};

ToggleButton.defaultProps = {
  icons: {
    checked: <CheckedIcon />,
    unchecked: <UncheckedIcon />,
  },
};

ToggleButton.propTypes = {
  disabled: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  className: PropTypes.string,
  onChange: PropTypes.func,
  icons: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      checked: PropTypes.node,
      unchecked: PropTypes.node,
    }),
  ]),
};

export default memo(ToggleButton);
