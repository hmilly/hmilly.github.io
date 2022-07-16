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
    border: 5px solid;
    border-image-slice: 1;
    border-image-source: linear-gradient(to bottom, #8d1e7e, #ac9df1);
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
