import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  box-sizing: border-box;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  flex-wrap: wrap;
  z-index: 10;
  position: fixed;
  top: 0;
  width: 100%;
  padding: 0 100px;
  background-color: var(--header-bg);
  backdrop-filter: blur(20px);

  @media (max-width: 1050px) {
    padding: 0 30px;
  }

  @media (max-width: 400px) {
    padding: 0 15px;
  }
`;

export const LogoText = styled.div`
  font-size: 30px;
  cursor: pointer;
  background-color: transparent;
  font-family: "Nunito";
  color: var(--text-color);
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

  @media (max-width: 500px) {
    display: none;
  }
`;

export const RightButton = styled(LeftButton)`
  background-color: var(--blue);
  color: white;
  border-color: var(--blue);
  &:hover {
    background-color: var(--light-blue);
    border-color: var(--light-blue);
  }
`;

// export const Toggle = styled(LeftButton)`
//   transition: all 0.5s linear;
// `;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
