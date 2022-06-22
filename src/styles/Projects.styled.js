import styled from "styled-components";

export const Grid = styled.main`
  display: grid;
  padding: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: auto;
  gap: 20px;
  justify-content: space-evenly;
  overflow-y: scroll;
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(34, 1, 77, 0.3);
  }
  ::-webkit-scrollbar {
    width: 4px;
    background-color: #68257981;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #ffbfff93;
    outline: 1px solid #cf11ff;
  }

  a {
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
    section {
      align-self: center;
      width: 95%;
      margin: 0 auto;
      &:hover {
        padding: 5px;
        transition: 0.5s;
      }
    }
  }
`;
