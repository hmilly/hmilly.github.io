import React from 'react'
import { Link } from "gatsby"


const GridItem = ({ link, name, description, image }) => {
    return (
        <Link target="_blank" to={link}>
            <h3>{name}</h3>
            <img src={image} alt={`${name} page thumbnail`}></img>
            <p>
                {description}
            </p>
        </Link>
    )
}

export default GridItem
