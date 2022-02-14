import styled from "styled-components";

export const About = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 600px));
  grid-template-rows: 1fr 200px;
  gap: 15px;
  padding-top: 30px;

  align-content: end;
  justify-content: center;
  grid-template-areas:
    "div div"
    "stack stack";
  div {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    justify-items: start;
    background-color: #000000b5;

    &:nth-child(3) {
      grid-area: stack;
      align-self: center;
      justify-self: center;
    }
  }
`;
