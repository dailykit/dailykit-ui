import React from "react";

const Tunnel = ({ children: panels }) => {
  return (
    <div>
      {panels.map(panel => panel.props.visibility !== "hidden" && panel)}
    </div>
  );
};

export default Tunnel;
