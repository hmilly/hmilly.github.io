import styled from "styled-components";

export const About = styled.main`
  display: grid;
  grid-template-columns: minmax(auto, 600px);
  grid-template-rows: 1fr 150px;
  gap: 10px;
  padding: 10px;
  justify-content: center;

  .about {
    display: flex;
    flex-direction: column;
    border: solid violet 5px;
    gap: 20px;
    padding: 10px;
    border-radius: 10px;
    background-color: black;
    p {
      &:nth-child(odd) {
        color: #fee8ff;
      }
    }
  }
`;
