import * as React from "react";
import { Grid } from "../styles/Projects.styled";
import Layout from "../components/Layout";
import GridItem from "../components/GridItem";
//images
import games from "../images/games.jpg";
import menu from "../images/menu.jpg";
import bank from "../images/bank.jpg";
import weather from "../images/weather.jpg";
import yt from "../images/yt.jpg";

const Projects = () => {
  const url = "https://hmilly.github.io/";

  return (
    <Layout>
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
        <GridItem
          name={"YouTube clone"}
          link={`${url}youtube_clone/`}
          description={"Fake YouTube with data from API"}
          image={yt}
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
    </Layout>
  );
};

export default Projects;
