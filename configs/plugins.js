// INSERT PLUGINS WITH SEPARATOR "," IN ARRAY

const path = require(`path`);

module.exports = [
  {
    resolve: `gatsby-plugin-styled-components`,
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: path.join(__dirname, `..`, `src`, `assets`, `images`),
    },
  },
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-plugin-nprogress`,
    options: {
      color: `#7159c1`,
      showSpinner: false,
      trickle: false,
      minimum: 0.4,
    },
  }
];
