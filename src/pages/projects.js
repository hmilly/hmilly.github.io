import * as React from "react";
import { Grid } from "../styles/Projects.styled";
import Layout from "../components/Layout";
import GridItem from "../components/GridItem";
import { StaticImage } from "gatsby-plugin-image";

const Projects = () => {
  const url = "https://hmilly.github.io/";

  return (
    <Layout>
      <Grid>
        <GridItem
          name={"Text Analysis"}
          link={`${url}text-analysis/`}
          description={"Text analysis app, for assessing a body of text."}
          image={
            <StaticImage
              src="../images/projects/textAnalysis.jpg"
              alt="text analysis thumbnail"
            />
          }
        />
        <GridItem
          name={"Menu"}
          link={`${url}recipes-book/`}
          description={
            "Mock food website with menu and checkout pages, made with React"
          }
          image={
            <StaticImage
              src="../images/projects/menu.jpg"
              alt="menu site thumbnail"
            />
          }
        />
        <GridItem
          name={"Weather app"}
          link={`${url}weather/`}
          description={
            "Weather app using API for locations - awaiting db upload"
          }
          image={
            <StaticImage
              src="../images/projects/weather.jpg"
              alt="weather site thumbnail"
            />
          }
        />
        <GridItem
          name={"Bank app"}
          link={`${url}bank/`}
          description={"Mock banking app. For access click login!"}
          image={
            <StaticImage
              src="../images/projects/bank.jpg"
              alt="bank site thumbnail"
            />
          }
        />
        <GridItem
          name={"YouTube clone"}
          link={`${url}youtube_clone/`}
          description={"Fake YouTube with data from API"}
          image={
            <StaticImage
              src="../images/projects/yt.jpg"
              alt="fake youtube thumbnail"
            />
          }
        />
        <GridItem
          name={"Game centre"}
          link={`${url}game-center/`}
          description={"Games website, created using React and TS"}
          image={
            <StaticImage
              src="../images/projects/games.jpg"
              alt="games site thumbnail"
            />
          }
        />
      </Grid>
    </Layout>
  );
};

export default Projects;
