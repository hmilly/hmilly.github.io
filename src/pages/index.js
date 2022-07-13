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
          <Link to="projects"  activeStyle={{ color: "red" }}>
            <StaticImage src="../images/profile.jpg" alt="profile" />
          </Link>
        </div>
        <StackCard />
      </Index>
    </Layout>
  );
};

export default IndexPage;
