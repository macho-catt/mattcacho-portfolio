const config= require('./src/config')

module.exports = {
    siteMetadata: {
      title: `Matt Cacho`,
      titleTemplate: `%s - A website`,
      description: `Matt Cacho is a software engineer.`,
      image: ``,
      siteUrl: `https://www.mattcacho.com`,
      twitterUsername: `@MattCacho`
    },
    plugins: [
      `gatsby-plugin-postcss`,
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-image`,
      `gatsby-plugin-sharp`,
      `gatsby-plugin-mdx`,
      `gatsby-transformer-sharp`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `sections`,
          path: `${__dirname}/content/sections`
        }
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `content`,
          path: `${__dirname}/content`
        }
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `experience`,
          path: `${__dirname}/content/sections/experience`
        }
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `experience`,
          path: `${__dirname}/static`
        }
      }
    ]
}