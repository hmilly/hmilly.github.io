import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
    font-family: "Gill Sans", sans-serif, serif;
    color: #eebde7;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

p, h1, h2, h3, li{
    text-shadow: 3px 2px #632968e8;
    color: #bfc4ff;
}
h1{
    font-size: 30px;
}
h2{
    font-size: 25px;
}
p, li{
    font-size: 20px;
}

`;
