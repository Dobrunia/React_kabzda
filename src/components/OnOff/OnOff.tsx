import React, { useState } from "react";

export function OnOff() {
  const [on, setOn] = useState<boolean>(false);
  const onStyle = {
    background: on ? "green" : "white",
    width: "30px",
    height: "30px",
    borderRadius: "15px",
    border: "1px solid black",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const offStyle = {
    background: on ? "white" : "red",
    width: "30px",
    height: "30px",
    borderRadius: "15px",
    border: "1px solid black",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const indicatorStyle = {
    background: on ? "green" : "red",
    marginLeft: "8px",
    width: "15px",
    height: "15px",
    borderRadius: "15px",
    border: "1px solid black",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const align = {
    marginLeft: "10px",
    marginTop: "20px",
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    justifyContent: "flex-start",
  };
  return (
    <div style={align}>
      <div style={onStyle} onClick={() => setOn(true)}>
        On
      </div>
      <div style={offStyle} onClick={() => setOn(false)}>
        Off
      </div>
      <div style={indicatorStyle}></div>
    </div>
  );
}
