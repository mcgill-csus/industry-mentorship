import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `CSUS Industry Mentorship Program`,
    siteUrl: `https://mcgill-csus.github.io/industry-mentorship`
  },
  pathPrefix: `/industry-mentorship`,
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
          "@components": "./src/components"
        },
        extensions: []
      }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-G2XFFWR5JJ", // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: [],
          // Defaults to https://www.googletagmanager.com
          origin: "https://mcgill-csus.github.io/industry-mentorship",
        },
      },
    }
  ]
};

export default config;
