import React from "react";
import { Link } from "gatsby";
import { Navbar } from "../styles/Layout.styled";
import { StaticImage } from "gatsby-plugin-image";


const Nav = () => {
  return (
    <Navbar>
      <ul className="internal">
        <Link to="/"  activeClassName="current">
          <li>Home</li>
        </Link>
        <Link to="/projects"  activeClassName="current">
          <li>Projects</li>
        </Link>
        <Link to="/about"  activeClassName="current">
          <li>About</li>
        </Link>
      </ul>
      <ul className="external">
        <a href="https://github.com/hmilly" target="_blank" rel="noreferrer">
          <li>
            <StaticImage src="../images/git.jpg" alt="github icon" />
          </li>
        </a>
        <a
          href="https://www.linkedin.com/in/hmilly/"
          target="_blank"
          rel="noreferrer"
        >
          <li>
            <StaticImage src="../images/in.jpg" alt="linked in icon" />
          </li>
        </a>
      </ul>
    </Navbar>
  );
};

export default Nav;
