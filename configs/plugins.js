// INSERT PLUGINS WITH SEPARATOR "," IN ARRAY

const path = require(`path`);

module.exports = [
  "gatsby-plugin-react-helmet",
  "gatsby-plugin-sitemap",
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
  },
  {
    resolve: `gatsby-plugin-prefetch-google-fonts`,
    options: {
      fonts: [
        {
          family: `Open Sans`,
          variants: [`400`, `700`],
        },
      ],
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Lucas de Carvalho`,
      short_name: `Lucas de Carvalho`,
      start_url: `/`,
      background_color: `#fff`,
      theme_color: `#7159c1`,
      display: `standalone`,
      icon: path.join(
        __dirname,
        `..`,
        `src`,
        `assets`,
        `images`,
        "icon-lc.png"
      ),
    },
  },
  {
    resolve: `gatsby-plugin-canonical-urls`,
    options: {
      siteUrl: `https://www.lucasdecarvalho.com`,
    },
  },
  {
    resolve: `gatsby-plugin-page-creator`,
    options: {
      path: path.join(__dirname, `..`, `src`, `pages`),
      ignore: [`**/styles.js`],
    },
  },
  "gatsby-plugin-offline",
];
