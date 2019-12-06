import React from "react";
import PlayerInfo from "./PlayerInfo";
import styled from "styled-components";

const PlayersDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function PlayerRankings(props) {
  return (
    <PlayersDiv>
      {props.players.map(player => (
        <PlayerInfo
          key={player.id}
          rank={player.id + 1}
          name={player.name}
          country={player.country}
          searches={player.searches}
        />
      ))}
    </PlayersDiv>
  );
}

export default PlayerRankings;
