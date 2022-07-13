import styled from "styled-components";
import img from "../images/bg.jpg";

export const Body = styled.div`
  display: grid;
  height: 100vh;
  overflow: hidden;
  grid-template-columns: 1fr;
  grid-template-rows: 50px 1fr 30px;
  grid-auto-columns: 1fr;
  gap: 10px;
  background-image: url(${img});
  background-position: center;
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
  footer {
    background-color: #000000a2;
    justify-self: end;
    padding: 5px;
  }
`;

export const Navbar = styled.nav`
  background-color: black;
  display: grid;
  grid-template-columns: minmax(auto, 600px) minmax(auto, 300px);
  grid-template-rows: 50px;
  gap: 20px;
  justify-content: space-between;
  ul.internal {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 50px;
  }
  ul.external {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 50px;
    img {
      width: 100%;
      max-height: 50px;
    }
  }
  ul {
    display: grid;
    list-style: none;
    gap: 10px;
    text-align: center;
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;

      &:hover {
        background: #80008096;
        transition: 0.2s;
        img {
          opacity: 0.65;
          transition: 0.2s;
        }
      }
    }
  }
`;
