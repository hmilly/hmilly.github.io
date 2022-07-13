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
    gap: 10px;
    padding: 10px;
    align-content: space-between;
    background-color: #26003bce;
    border: solid 3px #350152;
    border-radius: 4px;
    text-decoration: none;
    text-align: center;
    span {
      align-self: center;
      width: 95%;
      margin: 0 auto;
    }
    section {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr auto;
      gap: 10px;
      p {
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
    }
  }
`;
