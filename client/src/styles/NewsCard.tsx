import styled from "styled-components";

const card = styled.section`
    margin: 0 auto;
    @media (max-width: 599px) {
        width: 90%;
    }
    @media (min-width: 600px) {
        width: 30%;
    }
`;

const header = styled.header``;
const title = styled.section``;
const date = styled.section``;
const text = styled.section``;
const link = styled.section``;

export { card, header, title, date, text, link };
