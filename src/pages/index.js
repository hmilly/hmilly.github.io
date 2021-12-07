import * as React from "react";
import { Link } from "gatsby"
import { Container, Head, Grid } from "../styles/Main.styled"
import { GlobalStyles } from "../styles/Global"
import GridItem from "../components/GridItem";
import games from "../images/games.jpg"
import menu from "../images/menu.jpg"
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
          description={"A project for a fake burger website."}
          image={menu}
        />
        <GridItem
          name={"Game centre"}
          link={`${url}game-center/`}
          description={"Games created using React and TS"}
          image={games}
        />


        <GridItem
          name={"Weather app"}
          link={`${url}weather/`}
          description={"Weather app using API for locations"}
          image={games}
        />
        <GridItem
          name={"Bank app"}
          link={`${url}react-bank-app/`}
          description={"Banking app. Use 'lady' for user&pword"}
          image={games}
        />

      </Grid>
    </Container>
  );
};

export default IndexPage;
