import styled from "styled-components";
import img from "../images/c.jpg";

export const Container = styled.main`
  display: grid;
  height: 100vh;
  grid-template-columns: 1fr;
  grid-template-rows: 160px 1fr;
  grid-auto-columns: 1fr;
  grid-auto-flow: row;
  gap: 30px;
  background-image: url(${img});
  background-size: cover;
  justify-items: center;
`;

export const Head = styled.header`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr repeat(3, 0.5fr);
  grid-auto-flow: row;
  justify-items: center;
  align-items: center;

  h1 {
    text-decoration: underline;
  }
  section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    img {
      width: 40px;
      height: auto;
    }
    img:hover {
      cursor: pointer;
    }
  }
`;

export const Grid = styled.div`
  display: grid;
  height: 100%;
  width: 90%;
  grid-template-columns: repeat(auto-fit, 350px);
  grid-template-rows: 480px;
  gap: 20px;
  padding-bottom: 20px;
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
    background-color: #26003bbb;
    border: solid 3px #350152;
    border-radius: 4px;
    text-decoration: none;
    img {
      width: 100%;
      height: auto;
    }
    p {
      padding: 5px;
    }
  }
`;
