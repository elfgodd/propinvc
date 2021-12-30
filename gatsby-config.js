/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'PropinVC Propiedades Inversiones',
    description: 'Encuentra las mejores propiedades rapido muy rapido',
    author: '@AlienRoom',
    person: {name:'ElfGodd', age:' 34'},
    simpleData:['item1', 'item2'],
    complexData: [
      { name: 'Alberto', age: 34 },
      { name: 'Yarelis', age: 30 },
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
