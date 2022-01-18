import * as React from "react";
import { Link } from "gatsby";
import { Container, Head, Grid } from "../styles/Main.styled";
import { GlobalStyles } from "../styles/Global";
import GridItem from "../components/GridItem";
import games from "../images/games.jpg";
import menu from "../images/menu.jpg";
import bank from "../images/bank.jpg";
import weather from "../images/weather.jpg";
// import weather from "../images/weather.jpg"
import git from "../images/git.jpg";
import lin from "../images/lin.jpg";

const IndexPage = () => {
  const url = "https://hmilly.github.io/";

  return (
    <Container>
      <GlobalStyles />
      <Head>
        <h1>Hmilly</h1>
        <h2>Frontend Developer</h2>
        <span>
          <Link to="https://github.com/hmilly">
            <img src={git} alt="github"></img>
          </Link>
          <Link to="https://www.linkedin.com/in/hmilly/">
            <img src={lin} alt="linkedin"></img>
          </Link>
        </span>
        <p>
          Hi! Thanks for visiting my page.
          <br />I have been studying and self learning for around 2 years.
          <br />
          Please view my available projects below:
        </p>
      </Head>
      <Grid>
        <GridItem
          name={"Menu"}
          link={`${url}recipes-book/`}
          description={
            "Mock food website with menu and checkout pages, made with React"
          }
          image={menu}
        />
        <GridItem
          name={"Game centre"}
          link={`${url}game-center/`}
          description={"Games website, created using React and TS"}
          image={games}
        />
        <GridItem
          name={"Weather app"}
          link={`${url}weather/`}
          description={
            "Weather app using API for locations - awaiting db upload"
          }
          image={weather}
        />
        <GridItem
          name={"Bank app"}
          link={`${url}bank/`}
          description={"Mock banking app. For access click login!"}
          image={bank}
        />
        {/* <GridItem
          name={"Text Analysis"}
          link={`${url}text-analysis/`}
          description={
            "Text analysis program used for search work finding etc."
          }
          image={text}
        /> */}
      </Grid>
    </Container>
  );
};

export default IndexPage;
