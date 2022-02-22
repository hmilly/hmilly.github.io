import styled from "styled-components";

export const Grid = styled.main`
  display: grid;
  margin: 10px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 450px));
  grid-template-rows: repeat(auto-fit, minmax(auto, 550px));
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
    grid-template-rows: 50px 1fr 50px;
    align-items: center;
    justify-items: center;
    background-color: #26003bce;
    border: solid 3px #350152;
    border-radius: 4px;
    text-decoration: none;
    img {
      width: 98%;
      height: auto;
      margin:0 auto;
    }
    &:hover {
      background-color: #280355e2;
      border: solid 3px #014d52;
      img {
        padding: 5px;
        transition: 0.5s;
      }
    }
    
  }
`;
