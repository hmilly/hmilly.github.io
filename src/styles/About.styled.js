import styled from "styled-components";

export const About = styled.main`
  display: grid;
  grid-template-columns: minmax(350px, 600px);
  grid-template-rows: 1fr 200px;
  justify-content: center;
  .about {
    display: grid;
    grid-template-rows: auto;
    border: solid violet 5px;
    padding: 10px;
    border-radius: 10px;
    background-color: black;
  }
`;
