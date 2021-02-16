import React from "react";

function Spacer(props) {
  return (
    <div
      style={{
        height: props.height,
        width: props.width,
        backgroundColor: props.backgroundColor,
      }}
      className={props.className}
    ></div>
  );
}

export default Spacer;
