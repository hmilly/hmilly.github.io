import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Grid } from "../styles/Projects.styled";
import Layout from "../components/Layout";
import { GatsbyImage } from "gatsby-plugin-image";

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              name
              slug
              link
              description
              featuredImage {
                childImageSharp {
                  gatsbyImageData(layout: CONSTRAINED)
                }
              }
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <Grid>
        {data.allMarkdownRemark.edges.map((edge, i) => (
          <a
            target="_blank"
            rel="noreferrer"
            href={edge.node.frontmatter.link}
            key={i}
          >
            <h2>{edge.node.frontmatter.name}</h2>
            <section>
              <GatsbyImage
                image={
                  edge.node.frontmatter.featuredImage.childImageSharp
                    .gatsbyImageData
                }
                alt=""
              />
            </section>
            <p>{edge.node.frontmatter.description}</p>
          </a>
        ))}
      </Grid>
    </Layout>
  );
};

export default Projects;
