import React from "react";
import { useDarkMode } from "../hooks/usedarkMode";
import styled from "styled-components";

const HeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-left: 4%;
  margin-right: 4%;
  margin-top: 4%;
  align-items: center;
`;

function Header() {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <HeaderDiv>
      <h1>Most Searched Women's World Cup Players</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? "toggle toggled" : "toggle"}
        />
      </div>
    </HeaderDiv>
  );
}

export default Header;
