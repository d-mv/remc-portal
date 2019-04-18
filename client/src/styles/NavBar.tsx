import styled from "styled-components";

const NavBar = styled.nav``;

const Mobile = styled(NavBar)`
  margin: 0 auto;
  width: 100%;
  text-align: center;
  /* display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center; */
`;

const Desktop = styled(NavBar)`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export { Mobile, Desktop };
