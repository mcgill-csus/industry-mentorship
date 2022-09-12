import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `CSUS Industry Mentorship Program`,
    siteUrl: `https://mcgill-csus.ca`
  },
  pathPrefix: `/csus-industry-mentorship`,
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  // Needs to be commented out due to an infinite loop of changes being made to gatsby-type.d.ts file upon executing yarn develop
  // graphqlTypegen: true,
  plugins: [
    "gatsby-theme-docz",
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@images": "./src/images",
        },
        extensions: []
      }
    }
  ]
};

export default config;
