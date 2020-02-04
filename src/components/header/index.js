import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import { DefaultHeader, Container } from "./styles";

const Header = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      allSite {
        nodes {
          siteMetadata {
            title
          }
        }
      }
      file(relativePath: { eq: "avatar-lc.jpg" }) {
        childImageSharp {
          fixed(width: 48, height: 48) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const { title } = data.allSite.nodes[0].siteMetadata;
  const { file } = data;

  console.log(data);

  return (
    <DefaultHeader>
      <Container>
        <div className="header__left">
          <Img fixed={file.childImageSharp.fixed} />
          <h1>{title.toLowerCase()}</h1>
        </div>
      </Container>
    </DefaultHeader>
  );
};

export default Header;
