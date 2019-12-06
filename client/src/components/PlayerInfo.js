import React from "react";

function PlayerInfo(props) {
  return (
    <div>
      <p>Rank # {props.rank} </p>
      <p>Name {props.name}</p>
      <p>Country{props.country}</p>
      <p># of Searches{props.searches}</p>
    </div>
  );
}

export default PlayerInfo;
