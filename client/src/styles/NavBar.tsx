import styled from "styled-components";

const NavBar = styled.nav``;

const Mobile = styled(NavBar)`
  @media (max-width: 499px) {
  }
`;

const Desktop = styled(NavBar)`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export { Mobile, Desktop };
