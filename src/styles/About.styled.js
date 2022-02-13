import styled from "styled-components";

export const About = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, auto);
  gap: 5px;
  justify-items: center;
  align-items: center;
  background-color: #000000b5;
  h1 {
    text-decoration: underline;
  }
`;
