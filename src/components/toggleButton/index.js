import React from "react";
import { func, string } from "prop-types";
import styled from "styled-components";
import { FaMoon, FaRegSun } from "react-icons/fa";

const ToggleButton = ({ theme, toggleTheme }) => {
  const ToggleContainer = styled.button`
    background-color: #4643c3;
    border-radius: 30px;
    cursor: pointer;
    display: flex;
    font-size: 0.5rem;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    overflow: hidden;
    padding: 1rem 0.5rem;
    position: relative;
    width: 5rem;
    height: 2rem;
    border: none;

    svg {
      height: auto;
      width: 1.5rem;
      color: yellow;
      transition: all linear 0.3s;

      // sun icon
      &:first-child {
        transform: ${({ lightTheme }) =>
          lightTheme ? "translateX(0)" : "translateX(100px)"};
      }

      // moon icon
      &:nth-child(2) {
        transform: ${({ lightTheme }) =>
          lightTheme ? "translateX(-100px)" : "translateX(0)"};
      }
    }
  `;
  const isLight = theme === "light-theme";

  return (
    <ToggleContainer lightTheme={isLight} onClick={toggleTheme}>
      <FaRegSun />
      <FaMoon />
    </ToggleContainer>
  );
};

ToggleButton.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default ToggleButton;
