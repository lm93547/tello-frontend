/**
 *
 * Battery
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import './style.css'
import styled from 'styled-components';

const BatteryStyles = styled.div`
  width: 100%;
  --color: ${props => (props.level > 20 ? '#1af21a' : '#bb0707')};
  border: 2px solid black;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  flex-direction: column-reverse;
  /* box-shadow: 0 0 10px var(--color); */
  background: #c5c5c5;
  .batteryLevel {
    transition: all 0.5s;
    width: ${props => props.level}%;
    text-align: center;
    color: white;
    display: block;
    background: var(--color);
  }
`;

function Battery({...props}) {
  return (
    <BatteryStyles level={props.battery}>
      <span className="batteryLevel">{props.battery}%</span>
    </BatteryStyles>
  );
}

Battery.propTypes = {};

export default memo(Battery);
