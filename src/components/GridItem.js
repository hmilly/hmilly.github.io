import React from "react";

const GridItem = ({ link, name, description, image }) => {
  return (
    <a target="_blank" rel="noreferrer" href={link}>
      <h2>{name}</h2>
      {image}
      <p>{description}</p>
    </a>
  );
};

export default GridItem;
