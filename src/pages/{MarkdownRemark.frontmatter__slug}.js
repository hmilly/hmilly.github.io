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
              slug
              website
              link
              code
              title
              comments
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
          <div key={i}>
            <header>
              <h2>{edge.node.frontmatter.title}</h2>
            </header>
            <span>
              <GatsbyImage
                image={
                  edge.node.frontmatter.featuredImage.childImageSharp
                    .gatsbyImageData
                }
                alt={edge.node.frontmatter.title}
              />
            </span>
            <section>
              <p>
                {edge.node.frontmatter.description}
                {edge.node.frontmatter.link && (
                  <button
                    className="nostyle_btn"
                    onClick={() =>
                      window.open(
                        edge.node.frontmatter.link,
                        "_blank",
                        "noopener,noreferrer"
                      )
                    }
                  >
                    this wireframe
                  </button>
                )}
                .
              </p>
              <p>{edge.node.frontmatter.comments}</p>
              <button
                onClick={() =>
                  window.open(
                    edge.node.frontmatter.website,
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
              >
                Website
              </button>
              <button
                onClick={() =>
                  window.open(
                    edge.node.frontmatter.code,
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
              >
                Source code
              </button>
            </section>
          </div>
        ))}
      </Grid>
    </Layout>
  );
};

export default Projects;
