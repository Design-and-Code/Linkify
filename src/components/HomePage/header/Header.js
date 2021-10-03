import React from "react";
import styled from "styled-components";
import "./Header.css";
import { Link } from "react-router-dom";
import { LinkifyContext } from "../../../context";
import ToggleButton from "../../toggleButton";

export default function Header() {
  const { theme, setTheme } = React.useContext(LinkifyContext);
  console.log(theme, setTheme);
  const isLight = theme === "light-theme";

  const handleSubmit = () => {
    if (theme === "light-theme") setTheme("dark-theme");
    else setTheme("light-theme");
  };

  React.useEffect(() => {
    document.body.classList = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const Container = styled.div`
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    margin-top: 29px;
    margin-right: 112px;
    margin-left: 128px;
    flex-wrap: wrap;
    @media (max-width: 1200px) {
      //insert code later if required.
    }
    @media (max-width: 1050px) {
      margin-top: 15px;
      margin-right: 15px;
      margin-left: 15px;
    }
    @media (max-width: 300px) {
      justify-content: center;
    }
  `;
  const LogoText = styled.div`
    font-size: 25px;
    cursor: pointer;
  `;
  const ButtonGroup = styled.div`
    display: flex;
    cursor: pointer;
    flex-wrap: wrap;
  `;
  const LeftButton = styled.div`
    margin-right: 5px;
    color: black;
    border: 2px solid #4643c3;
    display: flex;
    padding: 3px 17px 5px 16px;
    border-radius: 8px;
    :hover {
      background-color: #4643c3;
      color: #fff;
    }
  `;
  const RightButton = styled(LeftButton)`
    background-color: #4643c3;
    color: #fff;
    :hover {
      background: none;
      color: ${({ lightTheme }) => (lightTheme ? "black" : "white")};
    }
  `;

  const Toggle = styled(LeftButton)`
    transition 
  
  `;
  const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
  `;

  return (
    <Container>
      <StyledLink to="/">
        <LogoText className={theme}>Linkify</LogoText>
      </StyledLink>
      <ButtonGroup>
        <StyledLink to="/account">
          <LeftButton
            className={theme === "light-theme" ? "lightfont" : "darkfont"}
          >
            Login
          </LeftButton>
        </StyledLink>
        <StyledLink to="/account">
          <RightButton lightTheme={isLight}>Sign Up</RightButton>
        </StyledLink>
        <StyledLink>
          <ToggleButton theme={theme} toggleTheme={handleSubmit} />
        </StyledLink>
      </ButtonGroup>
    </Container>
  );
}
