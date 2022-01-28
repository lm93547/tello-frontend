/**
 *
 * Tilt
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import './style.css'
import styled from 'styled-components';

const TiltWrap = styled.div`
  perspective: 500px;
  transform-style: preserve-3d;
  text-align: center;
  display: grid;
  justify-content: center;
  overflow: hidden;
  grid-gap: 5px;
  grid-template-columns: repeat(4, 1fr);
  span {
    background: #fe2c70;
  }
`;
const TiltStyles = styled.div`
  background-image: url('/images/drone.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  height: 200px;
  /* transition: all 0.2s; */
  color: white;
  transform: rotateX(${props => props.pitch}deg)
    rotate(${props => props.yaw * -1}deg)
    rotateY(${props => props.roll * -1}deg);
  position: relative;
  grid-column: 1 / -1;
`;

function Tilt({ pitch, roll, yaw, height }) {
  return (
  <TiltWrap>
    <TiltStyles pitch={pitch} roll={roll} yaw={yaw} />
  </TiltWrap>
  );
}

Tilt.propTypes = {};

export default memo(Tilt);
