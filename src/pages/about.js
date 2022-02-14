import React from "react";
import { About } from "../styles/About.styled";
import Layout from "../components/Layout";
import StackCard from "../components/StackCard";

const AboutPage = () => {
  return (
    <Layout>
      <About>
        <div>
          <h1>Bio:</h1>
          <h2>Holly - Frontend Developer</h2>
          <p>Hi! Thanks for visiting my page</p>
          <p>I have been studying and self learning for around 2 years</p>
          <p>Focusing mostly on Frontend development.</p>
          <p>Please feel free to view my projects,</p>
          <p>or reach out. Thanks</p>
        </div>
        <div>
          <h1>Things I'm interested to try:</h1>
          <p>Svelte</p>
          <p>Next.js</p>
          <p>vue</p>
          
        </div>
        <StackCard />
      </About>
    </Layout>
  );
};

export default AboutPage;
