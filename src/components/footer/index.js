import React from "react";

import { DefaultFooter } from "./styles";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { graphql, useStaticQuery } from "gatsby";

const Footer = () => {
  const socials = useStaticQuery(graphql`
    query Socials {
      allSite {
        nodes {
          siteMetadata {
            social {
              name
              url
            }
          }
        }
      }
    }
  `);

  const SocialTwitter = socials.allSite.nodes[0].siteMetadata.social[0];
  const SocialGithub = socials.allSite.nodes[0].siteMetadata.social[1];
  const SocialLinkedin = socials.allSite.nodes[0].siteMetadata.social[2];

  return (
    <DefaultFooter>
      © 2020 - lucasdecarvalho.com
      <div className="social">
        <a href={SocialGithub.url} title="Github" target="__blank">
          <FaGithub />
        </a>
        <a href={SocialTwitter.url} title="Twitter" target="__blank">
          <FaTwitter />
        </a>
        <a href={SocialLinkedin.url} title="Linkedin" target="__blank">
          <FaLinkedin />
        </a>
      </div>
    </DefaultFooter>
  );
};

export default Footer;
