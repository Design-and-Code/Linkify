import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  box-sizing: border-box;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  padding-top: 30px;
  padding-right: 100px;
  padding-left: 100px;
  flex-wrap: wrap;
  z-index: 10;

  @media (max-width: 1200px) {
    /* insert code later if required. */
  }

  @media (max-width: 1050px) {
    padding-top: 15px;
    padding-right: 30px;
    padding-left: 30px;
  }

  @media (max-width: 400px) {
    padding-right: 15px;
    padding-left: 15px;
  }
`;

export const LogoText = styled.div`
  font-size: 30px;
  cursor: pointer;
  background-color: transparent;
  font-family: "Nunito";

  @media (max-width: 500px) {
    font-size: 25px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  cursor: pointer;
  flex-wrap: wrap;
`;

export const LeftButton = styled.div`
  margin-right: 5px;
  color: var(--text-color);
  border: 2px solid var(--blue);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 16px;
  border-radius: 8px;
  transition: all 0.25s ease-in-out;
  font-size: 13px;
  min-width: 90px;

  :hover {
    background-color: var(--blue);
    color: white;
  }
`;

export const RightButton = styled(LeftButton)`
  background-color: var(--blue);
  color: white;
  &:hover {
    background-color: transparent;
    color: var(--text-color);
  }
`;

// export const Toggle = styled(LeftButton)`
//   transition: all 0.5s linear;
// `;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
