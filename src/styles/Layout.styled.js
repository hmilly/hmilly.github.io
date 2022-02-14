import styled from "styled-components";
import img from "../images/c.jpg";

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
  footer {
    background-color: #000000a2;
    justify-self: end;
    padding: 5px;
  }
`;

export const Navbar = styled.nav`
  background-color: #000000b5;
  display: grid;
  grid-template-columns: minmax(200px, 600px) minmax(75px, 250px);
  grid-template-rows: 50px;
  justify-content: space-between;

  ul.internal {
    grid-template-columns: repeat(3, 1fr);
  }
  ul.external {
    grid-template-columns: repeat(2, 1fr);
    img {
      height: 50px;
      width: 50px;
    }
  }
  ul {
    display: grid;
    grid-template-rows: 50px;
    list-style: none;
    gap: 10px;
    text-align: center;
    a {
      display: grid;
      align-content: center;
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
