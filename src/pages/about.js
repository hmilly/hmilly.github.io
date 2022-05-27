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
            have only taken to studying web development seriously in the last
            few years.
          </p>
          <p>
            I've mainly taken to working with React, but I'm open to much more.
            I'm now looking to find a position which is right for me, so I can
            improve my skills and be around tech all day long.
          </p>
          <p>
            Please feel free to view my projects, or if you know of any
            openings, let me know!
          </p>
          <br></br>
          <h1>Things I want to learn more about:</h1>
          <p>Svelte</p>
          <p>Backend development</p>
          <p>...Everything else!</p>
        </div>
        <StackCard />
      </About>
    </Layout>
  );
};

export default AboutPage;
