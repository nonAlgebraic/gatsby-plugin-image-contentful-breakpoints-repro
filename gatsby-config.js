module.exports = {
  siteMetadata: {
    title: "test",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "li5hGadRgM44guFg2Kfyb47ODr2L3FdOB3WfwUh-hkg",
        spaceId: "a3qyhfznts9y",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
