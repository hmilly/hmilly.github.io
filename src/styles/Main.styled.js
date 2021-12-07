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
  
  h1{
    font-size: 50px;
    text-decoration: underline;
  }
  h1, h3, p{
    color: #bfc4ff;
    text-shadow: 3px 2px #2d2c7a;
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
  grid-template-columns: repeat(auto-fill, minmax(300px, 400px));
  gap: 20px;
  justify-content: space-evenly;
  overflow-y: scroll;

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(34, 1, 77, 0.3);
  }
  ::-webkit-scrollbar {
    width: 4px;
    color:red;
    background-color: #792b2581;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #79442594;
    outline: 1px solid #79442594;
    border-radius: 5px;
  }

  a {
    background-color: #580909bc;
    border: solid 1px #7c1111;
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
