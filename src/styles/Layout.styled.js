import styled from "styled-components";
import img from "../images/c.jpg";

export const LayoutBody = styled.main`
  display: grid;
  height: 100vh;
  overflow: hidden;
  grid-template-columns: 1fr;
  grid-template-rows: 50px 1fr;
  grid-auto-columns: 1fr;
  gap: 10px;
  background-image: url(${img});
  background-position: center;
`;

export const Navbar = styled.nav`
  background-color: #000000b5;
  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr) repeat(2, 60px);
    grid-template-rows: 50px;
    gap: 20px;
    list-style: none;
    a,
    .external > li {
      display: grid;
      align-content: center;
      height: auto;
      text-decoration: none;
      font-size: 20px;
      img {
        display: absolute;
        height: 40px;
        width: auto;
        justify-self: center;
        align-self: center;
      }
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
