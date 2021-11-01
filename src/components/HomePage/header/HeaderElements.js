import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  margin-top: 29px;
  margin-right: 112px;
  margin-left: 128px;
  flex-wrap: wrap;

  @media (max-width: 1200px) {
    /* insert code later if required. */
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

export const LogoText = styled.div`
  font-size: 25px;
  cursor: pointer;
  background-color: transparent;
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
  padding: 3px 17px 5px 16px;
  border-radius: 8px;
  transition: all 0.25s ease-in-out;

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
