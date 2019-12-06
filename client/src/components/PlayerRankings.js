import React from "react";
import PlayerInfo from "./PlayerInfo";

function PlayerRankings(props) {
  return (
    <div>
      {props.players.map(player => (
        <PlayerInfo
          key={player.id}
          rank={player.id + 1}
          name={player.name}
          country={player.country}
          searches={player.searches}
        />
      ))}
      <p>mapping over data here to display player info</p>
    </div>
  );
}

export default PlayerRankings;
