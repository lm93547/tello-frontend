/**
 *
 * CommandGrid
 *
 */

import React, { memo } from "react";
// import PropTypes from 'prop-types';
import "./style.css";
import styled from "styled-components";
import socket from "../../containers/MainPage/socket";
import {BiArrowFromBottom, BiArrowFromTop} from 'react-icons/bi'
import {ImArrowLeft2, ImArrowRight2, ImArrowUp2, ImArrowDown2} from 'react-icons/im'
const buttonGrid = styled.div``;

function CommandGrid() {
  function sendCommand(command) {
    return function () {
      console.log(`Sending the command ${command}`);
      socket.emit("command", command);
    };
  }

  const amount = 100;

  return (
    <div>
      <div className="btn-holder">
        <button className="btn rotate top-left" onClick={sendCommand("ccw 15")}>
          <span className="symbol">⟲</span> 15°
        </button>
        <button title={`forward ${amount}cm`} className="btn" onClick={sendCommand(`forward ${amount}`)}>
          <span className="symbol"><ImArrowUp2/></span>
        </button>
        <button className="rotate btn top-right" onClick={sendCommand("cw 90")}>
          <span className="symbol">⟳</span> 15°
        </button>
        <button title={`left ${amount}cm`} className="btn" onClick={sendCommand(`left ${amount}`)}>
          <span className="symbol"><ImArrowLeft2/></span>
        </button>
        <div className="up-btn-holder">
          <button title={`up ${amount}cm`} className="btn height" onClick={sendCommand(`up ${amount}`)}>
            <span className="symbol"><BiArrowFromBottom/></span>
          </button>
          <button title={`down ${amount}cm`} className="btn height" onClick={sendCommand(`down ${amount}`)}>
            <span className="symbol"><BiArrowFromTop/></span>
          </button>
        </div>
        <button title={`right ${amount}cm`} className="btn" onClick={sendCommand(`right ${amount}`)}>
          <span className="symbol"><ImArrowRight2/></span>
        </button>
        <button className="btn rotate bottom-left" onClick={sendCommand("ccw 15")}>
          <span className="symbol">⟲</span> 15°
        </button>
        <button title={`back ${amount}cm`} className="btn" onClick={sendCommand(`back ${amount}`)}>
          <span className="symbol"><ImArrowDown2/></span>
        </button>
        <button className="rotate bottom-right btn" onClick={sendCommand("cw 90")}>
          <span className="symbol">⟳</span> 15°
        </button>
      </div>
      <div className="center">
        <button className="btn takeoff" onClick={sendCommand("takeoff")}>
          Take Off
        </button>
        <button className="btn land" onClick={sendCommand("land")}>
          Land
        </button>
      </div>
      <div className="flip-grid">
        <button className="btn" onClick={sendCommand("flip l")}>Flip Left</button>
        <button className="btn" onClick={sendCommand("flip f")}>Flip Forward</button>
        <button className="btn" onClick={sendCommand("flip r")}>Flip Right</button>
        <button className="btn" onClick={sendCommand("flip b")}>Flip Back</button>
      </div>
      {/* <button onClick={sendCommand("go 25 25 25 25")}>Go 25 25 25 25</button>
      <button onClick={sendCommand("curve 100 100 100 150 250 350 50")}>
        Curve!
      </button> */}
      <button className="btn emergency" onClick={sendCommand("emergency")}>
        emergency
      </button>
      <button className="btn stream-on" onClick={sendCommand("streamon")}>
        stream on
      </button>
      <button className="btn stream-on" onClick={sendCommand("streamoff")}>
        stream off
      </button>
    </div>
  );
}

export default memo(CommandGrid);
