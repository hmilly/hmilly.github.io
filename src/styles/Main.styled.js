import styled from "styled-components";
import img from "../images/c.jpg";

export const Container = styled.main`
  display: grid;
  height: 100vh;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  grid-auto-columns: 1fr;
  gap: 30px;
  background-image: url(${img});
  background-size: cover;
`;

export const Head = styled.header`
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
  span {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    img {
      width: 40px;
      height: auto;
      &:hover {
        cursor: pointer;
      }
    }
  }
`;

export const Grid = styled.div`
  display: grid;
  margin: 10px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 350px));
  grid-template-rows: repeat(auto-fit, minmax(auto, 450px));
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
    background-color: #26003bce;
    border: solid 3px #350152;
    border-radius: 4px;
    text-decoration: none;
    &:hover {
      background-color: #280355e2;
      border: solid 3px #014d52;
      img {
        padding: 5px;
        transition: 0.5s;
      }
    }
    img {
      width: 100%;
      height: auto;
    }
  }
`;
