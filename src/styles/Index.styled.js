import styled from "styled-components";

export const Index = styled.main`
  display: grid;
  grid-template-columns: repeat(1, minmax(350px, 500px));
  grid-template-rows: 1.5fr 200px;
  justify-content: center;
  transition: 3s;
  .profile {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 100px 1fr;
    align-items: center;
    .hidden {
      width: 100%;
      text-align: center;
      h1,
      h2 {
        background-color: #0000008d;
      }
    }
    img {
      width: 100%;
      height: auto;
      border-radius: 5%;
    }
  }
`;

export const Stack = styled.div`
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-rows: auto;
  gap: 20px;
  span {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    justify-items: center;
    align-items: center;
    img {
      width: auto;
      max-height: 80px;
      height: 100%;
    }
  }
`;
