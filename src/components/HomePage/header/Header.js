import React from "react";
import "./Header.css";
import { LinkifyContext } from "../../../context";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import {BsPersonCircle} from "react-icons/bs"
import {
  ButtonGroup,
  HeaderContainer,
  LeftButton,
  LogoText,
  RightButton,
  StyledLink,
} from "./HeaderElements";

export default function Header() {
  const { theme, setTheme, setIsModalOpen, signInToggler, logInToggler } =
    React.useContext(LinkifyContext);

  const handleLogin = () => {
    setIsModalOpen(true);
    logInToggler();
  };

  const handleSignin = () => {
    setIsModalOpen(true);
    signInToggler();
  };

  return (
    <HeaderContainer>
      <StyledLink to="/">
        <LogoText>Linkify</LogoText>
      </StyledLink>
      <ButtonGroup>
        <LeftButton onClick={handleLogin}>Login</LeftButton>
        <RightButton onClick={handleSignin}>Sign Up</RightButton>

        <div className="dropdown toggle" >
       <button className=" btn btn-dark" style={{backgroundColor:"black",border:"none"}}type="button" data-bs-toggle="dropdown" aria-expanded="false">
       <BsPersonCircle />
       </button>
  <ul className="dropdown-menu dark">
    <li><button className="dropdown-item  " onClick={handleSignin}> SignUp</button></li>
    <li><button className="dropdown-item " onClick={handleLogin}>LogIn</button></li>
    
  </ul>
</div>
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
