/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata:{
    title:'Gatsby Tutorial',
    description: 'some random description',
    author:'@johndoe',
    data:['item 1', 'item 2'],
    person: {name: 'peter', age: 32},
  }
  ,
  plugins: [`gatsby-plugin-styled-components`,
  `gatsby-transformer-sharp`,
   `gatsby-plugin-sharp`,
   {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
 {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
     {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `ya43su4g5v2h`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: `tAHg5oVTGPaRmwXkjFLaJbpl_ofs0WPVEDcOANp0vCg`,
      },
    },
],
}
