const config= require('./src/config')

module.exports = {
    siteMetadata: {
      title: `Matt Cacho`,
      titleTemplate: `%s's website`,
      description: `This is Matt Cacho's portfolio website.`,
      image: `/home.png`,
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
      `gatsby-plugin-anchor-links`,
      {
        resolve: `gatsby-plugin-react-svg`,
        options: {
          rule: {
            include: `${__dirname}/content/images/socials`
          }
        }
      },
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