import React from "react";
import { About } from "../styles/About.styled";
import Layout from "../components/Layout";

const AboutPage = () => {
  return (
    <Layout>
      <About>
        <h1>Hmilly</h1>
        <h2>Frontend Developer</h2>
        <p>
          Hi! Thanks for visiting my page.
          <br />I have been studying and self learning for around 2 years.
          <br />
          Please view my available projects below:
        </p>
      </About>
    </Layout>
  );
};

export default AboutPage;
