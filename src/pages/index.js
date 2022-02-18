import React, { useState } from "react";
import Layout from "../components/Layout";
import StackCard from "../components/StackCard";
import { Index } from "../styles/Index.styled";
import Nav from "../components/Nav";
import h from "../images/h.jpg";

const IndexPage = () => {
  const [hover, setHover] = useState(false);

  const headerTimeout = () => {
    setTimeout(() => {
      setHover(false);
    }, 5000);
  };

  return (
    <Layout>
      <header
        onMouseEnter={(e) => setHover(true)}
        onMouseLeave={(e) => headerTimeout()}
      >
        {hover ? <Nav /> : <></>}
      </header>

      <Index>
        <div className="profile" onMouseEnter={(e) => setHover(true)}>
          <div className="hidden">
            {hover ? (
              <>
                <h1>Holly / Hmilly</h1>
                <h2>Frontend Developer</h2>
              </>
            ) : (
              <></>
            )}{" "}
          </div>
          <img src={h} alt="profile" />
        </div>

        <StackCard />
      </Index>
    </Layout>
  );
};

export default IndexPage;
