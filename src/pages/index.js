import * as React from "react";
import { Link } from "gatsby"
import { Container, Head, Grid } from "../styles/Main.styled"
import { GlobalStyles } from "../styles/Global"
import GridItem from "../components/GridItem";
import games from "../images/games.jpg"
import menu from "../images/menu.jpg"
import bank from "../images/bank.jpg"
// import weather from "../images/weather.jpg"
import git from "../images/git.jpg"
import lin from "../images/lin.jpg"


const IndexPage = () => {
  const url = "https://hmilly.github.io/"

  return (
    <Container>
      <GlobalStyles />
      <Head>
        <h1>Hmilly</h1>
        <h3>Frontend Developer</h3>
        <section>
          <Link to="https://github.com/hmilly">
            <img src={git} alt="github"></img>
          </Link>
          <Link to="https://www.linkedin.com/in/hmilly/">
            <img src={lin} alt="linkedin"></img>
          </Link>
        </section>
        <p>
          Welcome to my page! View my available projects below:
        </p>

      </Head>
      <Grid>
        <GridItem
          name={"Menu"}
          link={`${url}recipes-book/`}
          description={"Burger website with the ability to order."}
          image={menu}
        />
        <GridItem
          name={"Game centre"}
          link={`${url}game-center/`}
          description={"Games website, created using React and TS"}
          image={games}
        />
        {/* <GridItem
          name={"Weather app"}
          link={`${url}weather/`}
          description={"Weather app using API for locations - awaiting db upload"}
          image={weather}
        /> */}
        <GridItem
          name={"Bank app"}
          link={`${url}bank/`}
          description={"Banking app - awaiting db upload"}
          image={bank}
        />

      </Grid>
    </Container>
  );
};

export default IndexPage;
