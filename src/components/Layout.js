import React from "react";
import { GlobalStyles } from "../styles/Global";
import { LayoutBody } from "../styles/Layout.styled";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <LayoutBody>
      <GlobalStyles />
      <title>Hm Portfolio</title>
      <Nav />
      {children}
    </LayoutBody>
  );
};

export default Layout;
