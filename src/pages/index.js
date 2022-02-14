import React from "react";
import Layout from "../components/Layout";
import StackCard from "../components/StackCard";
import { Index } from "../styles/Index.styled";
import h from "../images/h.jpg";

const IndexPage = () => {
  return (
    <Layout>
      <Index>
        <img className="profile" src={h} alt="profile" />
        <StackCard />
      </Index>
    </Layout>
  );
};

export default IndexPage;
