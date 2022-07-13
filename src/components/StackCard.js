import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { Stack } from "../styles/Index.styled";

const StackCard = () => {
  return (
    <Stack>
      <Link to="/projects">
        <StaticImage src="../images/stack/html.jpg" alt="html logo" />
        <StaticImage src="../images/stack/css.jpg" alt="css logo" />
      </Link>
      <Link to="/projects">
        <StaticImage src="../images/stack/js.jpg" alt="js logo" />
        <StaticImage src="../images/stack/react.jpg" alt="react logo" />
      </Link>
    </Stack>
  );
};

export default StackCard;
