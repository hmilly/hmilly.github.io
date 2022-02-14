import React from "react";
import { Link } from "gatsby";
import { Navbar } from "../styles/Layout.styled";
import git from "../images/git.jpg";
import lin from "../images/lin.jpg";

const Nav = () => {
  return (
    <Navbar>
      <ul className="internal">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/projects">
          <li>Projects</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
      </ul>
      <ul className="external">
        <a
          href="https://github.com/hmilly"
          target="_blank"
          rel="noreferrer"
        >
          <li>
            <img src={git} alt="github"></img>
          </li>
        </a>
        <a
          href="https://www.linkedin.com/in/hmilly/"
          target="_blank"
          rel="noreferrer"
        >
          <li>
            <img src={lin} alt="linkedin"></img>
          </li>
        </a>
      </ul>
    </Navbar>
  );
};

export default Nav;
