import styled from "styled-components";

export const Index = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 500px));
  grid-template-rows: repeat(2, 1fr);
  grid-template-areas:
    "pic"
    "icons";
  align-items: center;
  justify-items: center;
  justify-content: center;
  .profile {
    grid-area: pic;
    width: 80%;
    height: auto;
    max-height: 450px;
    border-radius: 50%;
  }
  div{
    grid-area: icons;
  }
`;

export const Stack = styled.div`
  display: grid;
  justify-items: center;
  grid-template-areas:
    "html"
    "js";
  span {
    &:nth-child(1) {
      grid-area: html;
    }
    &:nth-child(2) {
      grid-area: js;
    }
    img {
      width: auto;
      max-height: 80px;
      height: 100%;
    }
  }
`;
