import styled, { StyledFunction } from "styled-components";

interface IProps {
  desktop?: boolean;
}

const NavButton = styled.button<IProps>`
  padding: 0px 15px;
  color: #162c9b;
  background: none;
  border: none;
  font-family: Montserrat;
  font-weight: 400;
  font-size: ${props => (props.desktop ? "1.2rem" : "5vw")};
  cursor: pointer;
  outline: none;
  user-select: none;
`;

const Active = styled(NavButton)`
  span {
    border-bottom: 3px solid #95eb00;
  }
`;
const NonActive = styled(NavButton)`
  span {
    border-bottom: 3px solid white;
  }
`;

export { Active, NonActive };
