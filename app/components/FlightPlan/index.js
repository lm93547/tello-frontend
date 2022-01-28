/**
 *
 * FlightPlan
 *
 */

import React, { memo, useState } from "react";
// import PropTypes from 'prop-types';
import Select from "react-select";
import "./style.css";

function FlightPlan({ ...props }) {
  const [commands, setCommands] = useState([
    { name: "Default Command", command: "command" },
  ]);
  const commandList = [
    { label: "command", value: "command", description: "Enter SDK Mode" },
    { label: "takeoff", value: "takeoff", description: "Auto takeoff" },
    { label: "land", value: "land", description: "Auto landing" },
    {
      label: "streamon",
      value: "streamon",
      description: "Enable video stream",
    },
    {
      label: "streamoff",
      value: "streamoff",
      description: "Disable video stream",
    },
    {
      label: "emergency",
      value: "emergency",
      description: "Stop motors immediately",
    },
    { label: "up x", value: "up" },
  ];

  return (
    <div className="flight-plan-outer">
      <h2>Flight Plan</h2>
      <div className="input-holder">
        <Select
          defaultValue={[commandList[0]]}
          isMulti
          name="colors"
          options={commandList}
          className="basic-multi-select"
          classNamePrefix="select"
          onChange={(e)=>{console.log(e)}}
        />
      </div>
      <div>
        {commands.map((element) => {
          return (
            <div className="flight-plan-item">
              <div>{element.name}</div>
              <div>{element.command}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

FlightPlan.propTypes = {};

export default memo(FlightPlan);
