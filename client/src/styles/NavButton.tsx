import styled from "styled-components";

const NavButton = styled.button`
  padding: 10px 20px;
  color: #162c9b;
  background: none;
  border: none;
  font-family: Montserrat;
  font-weight: 400;
  font-size: 1.2rem;
  cursor: pointer;
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
