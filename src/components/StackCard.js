import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Stack } from "../styles/Index.styled";

const StackCard = () => {
  return (
    <Stack>
      <span>
        <StaticImage src="../images/stack/html.jpg" alt="html logo" />
        <StaticImage src="../images/stack/css.jpg" alt="css logo" />
      </span>
      <span>
        <StaticImage src="../images/stack/js.jpg" alt="js logo" />
        <StaticImage src="../images/stack/react.jpg" alt="react logo" />
      </span>
    </Stack>
  );
};

export default StackCard;
