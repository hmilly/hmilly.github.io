import * as React from "react";
import { Grid } from "../styles/Projects.styled";
import Layout from "../components/Layout";
import GridItem from "../components/GridItem";
import { StaticImage } from "gatsby-plugin-image";

const Projects = () => {
  const ghUrl = "https://hmilly.github.io/";

  return (
    <Layout>
      <Grid>
        <GridItem
          name={"Text Analysis"}
          link={`${ghUrl}text-analysis/`}
          description={
            "Text analysis app, for assessing a body of text - made using React."
          }
          image={
            <StaticImage
              src="../images/projects/textAnalysis.jpg"
              alt="text analysis thumbnail"
            />
          }
        />
        <GridItem
          name={"Menu"}
          link={`${ghUrl}recipes-book/`}
          description={
            "Mock food website with menu and checkout pages, made with React using Context"
          }
          image={
            <StaticImage
              src="../images/projects/menu.jpg"
              alt="menu site thumbnail"
            />
          }
        />
        <GridItem
          name={"Quiz game"}
          link={`https://quiz-omega-gold.vercel.app/`}
          description={
            "Who wants to be a Millionaire rip off - using Next.js and tailwind"
          }
          image={
            <StaticImage
              src="../images/projects/quiz.jpg"
              alt="quiz site thumbnail"
            />
          }
        />
        <GridItem
          name={"Bank app"}
          link={`${ghUrl}bank/`}
          description={
            "Mock banking app. For access click login! - made with React"
          }
          image={
            <StaticImage
              src="../images/projects/bank.jpg"
              alt="bank site thumbnail"
            />
          }
        />
        <GridItem
          name={"YouTube clone"}
          link={`${ghUrl}youtube_clone/`}
          description={"Fake YouTube with data from API - made with Gatsby"}
          image={
            <StaticImage
              src="../images/projects/yt.jpg"
              alt="fake youtube thumbnail"
            />
          }
        />
        <GridItem
          name={"Game centre"}
          link={`${ghUrl}game-center/`}
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
