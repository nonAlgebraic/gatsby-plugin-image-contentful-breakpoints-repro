**To reproduce:**

1. run `yarn install`
2. set the `accessToken` and `spaceId` properties in the `gatsby-source-contentful` plugin config object in `gatsby-config.js`
3. run `yarn build`

**Expected behavior:** build completes successfully.

**Observed behavior:** build fails with this error:

```bash
ERROR #85901  GRAPHQL

There was an error in your GraphQL query:

Unknown argument "breakpoints" on field "gatsbyImageData" of type "ContentfulAsset".

GraphQL request:7:9
6 |         formats: [WEBP]
7 |         breakpoints: [750, 1050]
  |         ^
8 |       )

File: src/pages/index.js:15:9
```

Notes:

- If you remove the `breakpoints` argument from the `gatsbyImageData` resolver call in the page query, the build succeeds and the site can be served.
- Running the site in `develop` mode makes no difference to the observed behavior above.
