import React from "react";
import Layout from "../components/Layout";
import StackCard from "../components/StackCard";
import { Link } from "gatsby";
import { Index } from "../styles/Index.styled";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout>
      <Index>
        <div className="profile">
          <section>
            <h1>Holly / Hmilly</h1>
            <h2>Frontend Developer</h2>
          </section>
          <Link to="projects">
            <StaticImage src="../images/profile.jpg" alt="profile" />
          </Link>
          <p>
              I'm an enthusiastic and skilled web developer who also possesses a
              wealth of transferable skills and a passion for digital
              innovation. I’m currently seeking my first commercial role within
              the frontend development field.
            </p>
        </div>
        <StackCard />
      </Index>
    </Layout>
  );
};

export default IndexPage;
