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
      `gatsby-plugin-react-helmet`
    ]
}