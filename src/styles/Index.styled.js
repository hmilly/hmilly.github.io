import styled from "styled-components";

export const Index = styled.main`
  display: grid;
  grid-template-columns: minmax(280px, 500px);
  grid-template-rows: 1fr 200px;
  justify-content: center;
  transition: 3s;
  .profile {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 100px 1fr;
    align-items: center;
    justify-items: center;
    section,
    p {
      width: 100%;
      min-width: 200px;
      text-align: center;
      background-color: #0000008d;
    }
    img {
      width: 85%;
      margin: 0 auto;
      height: auto;
      border-radius: 5%;
      cursor: pointer;
    }
  }
`;

export const Stack = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-rows: auto;
  gap: 10px;
  a {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    justify-items: center;
    align-items: center;
    div {
      &:hover {
        animation: rotation 0.5s 1;
        cursor: pointer;
      }
    }
    img {
      width: auto;
      max-height: 80px;
      height: 100%;
      padding: 5px;
    }
    @keyframes rotation {
      0% {
        transform: perspective(120px) rotateX(0deg) rotateY(0deg);
        -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg);
      }
      100% {
        transform: perspective(120px) rotateX(-10deg) rotateY(0deg);
        -webkit-transform: perspective(120px) rotateX(-10deg) rotateY(-360deg);
      }
    }
  }
`;
