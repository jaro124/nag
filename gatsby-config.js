/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Zakład kamieniarski Mariusz Słupianek`,
    titleTemplate: "Zakład kamieniarski Mariusz Słupianek",
    description: `Zakład kamieniarski Mariusz Słupianek`,
    keywords: [`gatsby`, `tailwind`, `react`, `tailwindcss`],
    author: `@doe`,
    siteUrl: "https://www.doe.com", // No trailing slash allowed!
    image: "/images/site-image.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@doe",
    lang: "pl",
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/w129-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`, `/kontakt`],
      },
    },
  ],
};
