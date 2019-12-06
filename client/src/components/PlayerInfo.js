import React from "react";
import styled from "styled-components";

const PlayerDiv = styled.div`
  display: flex;
  flex-direction: row;
  justfiy-content: space-around;
  margin: 20px;
  border-radius: 6px;
  padding: 1%;
  width: 550px;
  align-items: center;
  color: #fff;
  background-color: #313843;
  border: 1px solid white;
`;

const PlayerInfoPara = styled.p`
  margin: 1.5%;
`;

const RankPara = styled.p`
  font-size: 1.5rem;
  text-decoration: bold;
  margin: 2%;
`;

function PlayerInfo(props) {
  return (
    <PlayerDiv>
      <RankPara># {props.rank} </RankPara>
      <PlayerInfoPara> {props.name}, </PlayerInfoPara>
      <PlayerInfoPara>{props.country} </PlayerInfoPara>
      <PlayerInfoPara>Searches: {props.searches} </PlayerInfoPara>
    </PlayerDiv>
  );
}

export default PlayerInfo;
