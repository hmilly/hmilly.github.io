import React from "react";
import { About } from "../styles/About.styled";
import Layout from "../components/Layout";
import StackCard from "../components/StackCard";

const AboutPage = () => {
  return (
    <Layout>
      <About>
        <div className="about">
          <h1>About:</h1>
          <h2>Holly - Frontend Developer</h2>
          <p>Hi! Thanks for visiting!</p>
          <p>
            I have been interested in web design since myspace was around, but
            have only taken to studying web development seriously in the last 2
            years.
          </p>
          <p>
            I have been focusing mostly on Frontend development, but have also
            completed a backend course and it's definetely something I want to
            spend more time with in the future.
          </p>
          <p>
            Please feel free to view my projects, or reach out using the links
            above.
          </p>
          <br></br>
          <h1>Things I want to learn more about:</h1>
          <p>Svelte</p>
          <p>Next.js</p>
          <p>vue</p>
          <p>backend development</p>
        </div>
        <StackCard />
      </About>
    </Layout>
  );
};

export default AboutPage;
