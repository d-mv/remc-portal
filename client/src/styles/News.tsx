import styled from "styled-components";

const news = styled.section`
    display: flex;
    width: 100vw;
    @media (max-width: 599px) {
        flex-direction: column;
    }
    @media (min-width: 600px) {
        flex-wrap: wrap;
    }
`;

const message = styled.div`
    position: fixed;
    top: 48vh;
    width: 20vw;
    left: 40vw;
    text-align: center;
    font-family: "Open Sans", Helvetica, Arial, sans-serif;
    font-size: 1.5rem;
    color: #162c9b;
`;

export { news, message };
