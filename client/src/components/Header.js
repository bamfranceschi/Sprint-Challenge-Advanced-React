import React from "react";
import { useDarkMode } from "../hooks/usedarkMode";
import styled from "styled-components";

const HeaderCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 4%;
  align-items: center;
`;

const HeaderImg = styled.img`
  height: 300px;
`;

function Header() {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <HeaderCont>
      <HeaderDiv>
        <h1>Most Searched Women's World Cup Players</h1>
        <div className="dark-mode__toggle">
          <div
            onClick={toggleMode}
            className={darkMode ? "toggle toggled" : "toggle"}
            data-testid={"toggler"}
          />
        </div>
      </HeaderDiv>
      <HeaderImg
        data-testid={"header-image"}
        src="https://cdn.ussoccer.com/-/media/project/ussf/migrated/images/wnt/gallery-images/2015/07/150705-wnt-v-jpn/150705-wnt-v-jpn-champions.ashx?h=682&la=en-US&w=1200&rev=c8dfdb6d80034cba85fd536a43e1c92f&hash=3F5CCEB92F48097FD760A4F4D35178AE"
      />
    </HeaderCont>
  );
}

export default Header;
