import styled from "styled-components";

export const Grid = styled.main`
  display: grid;
  padding: 20px 5px;
  grid-template-columns: repeat(auto-fit, minmax(auto, 500px));
  grid-template-rows: auto;
  gap: 20px;
  justify-content: space-evenly;
  div {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
    align-self: start;
    background-color: #26003be2;
    border: solid 3px #350152;
    border-radius: 4px;
    text-decoration: none;
    padding: 10px;
    text-align: center;
    header {
      padding: 10px 0;
    }
    span {
      align-self: center;
      margin: 0 auto;
      padding: 0 5px;
    }
    section {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr auto;
      width: 100%;
      gap: 10px;
      p {
        padding: 10px;
        grid-column-start: 1;
        grid-column-end: 3;
      }
      button {
        border-image-slice: 1;
        border-width: 3px;
        border-image-source: linear-gradient(to left, #ca1eb8, #3a66d5);
        height: 50px;
        background: #26003bce;
        cursor: pointer;
        &:hover {
          border-width: 6px;
          font-weight: 600;
          transition: 0.1s;
        }
      }
      .nostyle_btn{
        border: none;
        color: #eebde7;
        height: auto;

      }
    }
  }
`;
