import React from "react";
import Layout from "../components/Layout";
import StackCard from "../components/StackCard";
import { Index } from "../styles/Index.styled";
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
    <Layout>
      <Index>
        <div className="profile">
          <section>
            <h1>Holly / Hmilly</h1>
            <h2>Frontend Developer</h2>
          </section>
          <StaticImage src="../images/profile.jpg" alt="profile" />
        </div>
        <StackCard />
      </Index>
    </Layout>
  );
};

export default IndexPage;
