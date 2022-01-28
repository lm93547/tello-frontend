/**
 *
 * MainPage
 *
 */

import React, { memo, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import JSMpeg from "@cycjimmy/jsmpeg-player";
import injectSaga from "../../utils/injectSaga";
import injectReducer from "../../utils/injectSaga";
import makeSelectMainPage from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import "./style.css";
import socket from "./socket";
import Battery from "../../components/Battery";
import Tilt from "../../components/Tilt";
import CommandGrid from "../../components/CommandGrid";
import useKeyboardShortcut from "../../utils/useKeyboardShortcut";
import JsmpegPlayer from "../../components/JsmpegPlayer";
import dronePoster from "../../images/dronePoster.jpg";
import FlightPlan from "../../components/FlightPlan";

export function useDroneState() {
  const [droneState, updateDroneState] = useState({});
  useEffect(() => {
    socket.on("dronestate", updateDroneState);
    return () => socket.removeListener("dronestate");
  }, []);
  return droneState;
}

export function useSocket() {
  const [status, updateStatus] = useState("DISCONNECTED");
  useEffect(() => {
    socket.on("status", updateStatus);
    return () => socket.removeListener("status");
  }, []);
  return status;
}

export function MainPage() {
  const status = useSocket();
  const droneState = useDroneState([]);
  const [image, setImage] = useState(<></>);

  function sendCommand(command) {
    return function () {
      console.log(`Sending the command ${command}`);
      socket.emit("command", command);
    };
  }

  // function getVideoStream(){
  //    return function(){
  //      socket.on('canvas', function(data){
  //        console.log(data)
  //      })
  //    }
  // }

  useEffect(() => {
    socket.on("canvas", (data) => {
      setImage("data:image/jpeg;base64," + data);
      try {
        // var canvas = document.getElementById('videostream');
        // var context = canvas.getContext('2d');
        // var imageObj = new Image();
        // // console.log("🚀 ~ file: index.js ~ line 69 ~ useEffect ~ imageObj", imageObj)
        // imageObj.src = "data:image/jpeg;base64,"+ data;
        // imageObj.onload = function(){
        //   context.height = imageObj.height;
        //   context.width = imageObj.width;
        //   context.drawImage(imageObj,0,0,context.width,context.height);
        // }
        //setImage(imageObj.src)
      } catch (e) {
        console.log("🚀 ~ file: index.js ~ line 77 ~ useEffect ~ e", e);
      }
    });
  }, []);

  useEffect(() => {
    console.log(droneState);
  }, [droneState]);

  const amount = 100;

  useKeyboardShortcut(
    ["w"],
    () => {
      sendCommand(`forward ${amount}`);
    },
    { overrideSystem: true }
  );
  useKeyboardShortcut(
    ["s"],
    () => {
      sendCommand(`back ${amount}`);
      console.log("s backward");
    },
    { overrideSystem: true }
  );
  useKeyboardShortcut(
    ["a"],
    () => {
      sendCommand(`left ${amount}`);
      console.log("a left");
    },
    { overrideSystem: true }
  );
  useKeyboardShortcut(
    ["d"],
    () => {
      sendCommand(`right ${amount}`);
      console.log("d right");
    },
    { overrideSystem: true }
  );
  useKeyboardShortcut(
    ["q"],
    () => {
      sendCommand(`ccw ${amount}`);
      console.log("q pan left");
    },
    { overrideSystem: true }
  );
  useKeyboardShortcut(
    ["e"],
    () => {
      sendCommand(`cc ${amount}`);
      console.log("d pan right");
    },
    { overrideSystem: true }
  );
  useKeyboardShortcut(
    ["r"],
    () => {
      sendCommand(`up ${amount}`);
      console.log("up");
    },
    { overrideSystem: true }
  );
  useKeyboardShortcut(
    ["f"],
    () => {
      sendCommand(`down ${amount}`);
      console.log("down");
    },
    { overrideSystem: true }
  );
  const statusClassName =
    status === "DISCONNECTED" ? "disconnected-class" : "connected-class";
  var videoOptions = {};
  return (
    <div>
      <Helmet>
        <title>Main Page</title>
        <meta name="description" content="Description of Main Page" />
      </Helmet>
      <div className={`header ${statusClassName}`}>
        <div className={`header-item`}>
          <h4>Tello Control</h4>
        </div>
        <div className={`header-item`}>
          <div>{status}<Battery battery={droneState.bat} /></div>
        </div>
      </div>
      {/* <canvas id="video-canvas"></canvas>  */}
      <div className="grid">
        <div className="video-column">
          <div className="video-player">
            <div className="video-info">
              <span className="mt-10">Pitch: {droneState.pitch}</span>
              <span>Roll: {droneState.roll}</span>
              <span>Yaw: {droneState.yaw}</span>
              <span className="mb-10">Height: {droneState.height}M</span>
            </div>
            <JsmpegPlayer
              poster={"../../images/dronePoster.jpg"}
              wrapperClassName="video-player"
              videoUrl={"ws://localhost:3001/stream"}
              options={videoOptions}
            />
            
          </div>
          <div className="under-video-player">
            <div className="flight-plan">
              <FlightPlan />
            </div>
            <div className="map">Map</div>
          </div>
        </div>
        <div className="control-panel">
          
          <Tilt
            pitch={droneState.pitch}
            roll={droneState.roll}
            yaw={droneState.yaw}
            height={droneState.h}
          />
          <CommandGrid />
        </div>
      </div>
    </div>
  );
}

MainPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  mainPage: makeSelectMainPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  injectReducer({ key: "mainPage", reducer }),
  injectSaga({ key: "mainPage", saga }),
  withConnect,
  memo
)(MainPage);
