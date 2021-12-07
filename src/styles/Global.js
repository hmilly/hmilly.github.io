import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
*{
    font-family: "Gill Sans", sans-serif, serif;
    color: #eebde7;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    text-align: center;
}

p, h1, h3{
    text-shadow: 3px 2px #632968e8;
}

body{
    width: 100%;
    height: 100vh;
    background-color: black;
    overflow: hidden;
}
`