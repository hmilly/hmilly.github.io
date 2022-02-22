import React from "react";
import { GlobalStyles } from "../styles/Global";
import { Body } from "../styles/Layout.styled";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <Body>
      <title>Hm Portfolio</title>
      <header>
        <Nav />
      </header>
      <GlobalStyles />
      {children}
      <footer>
        <p>2022 Hmilly</p>
      </footer>
    </Body>
  );
};

export default Layout;
