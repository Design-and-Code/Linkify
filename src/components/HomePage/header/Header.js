import React from "react";
import styled from "styled-components";
import "./Header.css";
import { Link } from "react-router-dom";
import { LinkifyContext } from "../../../context";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export default function Header() {
  const { theme, setTheme, setIsModalOpen } = React.useContext(LinkifyContext);
  console.log(theme, setTheme);

  const themeObj = {
    color: theme,
  };

  // const handleSubmit = () => {
  //   if (theme === "light-theme") setTheme("dark-theme");
  //   else setTheme("light-theme");
  // };

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
    background-color: transparent;
  `;
  const ButtonGroup = styled.div`
    display: flex;
    cursor: pointer;
    flex-wrap: wrap;
  `;
  const LeftButton = styled.div`
    margin-right: 5px;
    color: ${(props) => props.themeObj};
    border: 2px solid #4643c3;
    display: flex;
    padding: 3px 17px 5px 16px;
    border-radius: 8px;
    transition-delay: 3s;
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
      color: ${(props) => {
        console.log(props);
        return props.theme === "light-theme" ? "black" : "white";
      }};
    }
  `;

  // const Toggle = styled(LeftButton)`
  //   transition: all 0.5s linear;
  // `;
  const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
  `;

  return (
    <Container>
      <StyledLink to="/">
        <LogoText className={`${theme} transition`}>Linkify</LogoText>
      </StyledLink>
      <ButtonGroup>
        <StyledLink>
          <LeftButton
            themeObj={theme === "light-theme" ? "black" : "white"}
            onClick={() => setIsModalOpen(true)}
          >
            Login
          </LeftButton>
        </StyledLink>
        <StyledLink>
          <RightButton onClick={() => setIsModalOpen(true)} theme={theme}>
            Sign Up
          </RightButton>
        </StyledLink>
        {/* <StyledLink>
          <Toggle
            onClick={handleSubmit}
            className={theme === "light-theme" ? "lightfont" : "darkfont"}
          >
            Toggle
          </Toggle>
        </StyledLink> */}
        <StyledLink>
          <div className="toggle-container">
            {theme === "light-theme" && (
              <MdDarkMode
                className="toggle-icon"
                onClick={() => setTheme("dark-theme")}
              />
            )}
            {theme === "dark-theme" && (
              <MdLightMode
                className="toggle-icon darkfont"
                onClick={() => setTheme("light-theme")}
              />
            )}
          </div>
        </StyledLink>
      </ButtonGroup>
    </Container>
  );
}
