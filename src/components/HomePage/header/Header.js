import React from "react";
import "./Header.css";
import { LinkifyContext } from "../../../context";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import {
  ButtonGroup,
  HeaderContainer,
  LeftButton,
  LogoText,
  RightButton,
  StyledLink,
} from "./HeaderElements";

export default function Header() {
  const { theme, setTheme, setIsModalOpen } = React.useContext(LinkifyContext);
  console.log(theme, setTheme);

  // const handleSubmit = () => {
  //   if (theme === "light-theme") setTheme("dark-theme");
  //   else setTheme("light-theme");
  // };

  React.useEffect(() => {
    document.body.classList = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <HeaderContainer>
      <StyledLink to="/">
        <LogoText className={`${theme} transition`}>Linkify</LogoText>
      </StyledLink>
      <ButtonGroup>
        <LeftButton
          themeObj={theme === "light-theme" ? "black" : "white"}
          onClick={() => setIsModalOpen(true)}
        >
          Login
        </LeftButton>
        <RightButton onClick={() => setIsModalOpen(true)} theme={theme}>
          Sign Up
        </RightButton>
        {/* <StyledLink>
          <Toggle
            onClick={handleSubmit}
            className={theme === "light-theme" ? "lightfont" : "darkfont"}
          >
            Toggle
          </Toggle>
        </StyledLink> */}
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
      </ButtonGroup>
    </HeaderContainer>
  );
}
