module.exports = {
  siteMetadata: {
    title: "test",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "<your access token here>",
        spaceId: "<your space ID here>",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
  ],
};
