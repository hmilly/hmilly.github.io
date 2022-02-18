import React from "react";
import html from "../images/html.jpg";
import css from "../images/css.jpg";
import react from "../images/react.jpg";
import js from "../images/js.jpg";
import { Stack } from "../styles/Index.styled";

const StackCard = () => {
  return (
    <Stack>
      <span>
        <img src={html} alt="html" />
        <img src={css} alt="css" />
      </span>
      <span>
        <img src={js} alt="js" />
        <img src={react} alt="react" />
      </span>
    </Stack>
  );
};

export default StackCard;
