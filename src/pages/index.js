import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const IndexPage = ({ data: { contentfulAsset } }) => (
  <GatsbyImage image={contentfulAsset.gatsbyImageData} />
);

export const pageQuery = graphql`
  query {
    contentfulAsset {
      gatsbyImageData(
        layout: FULL_WIDTH
        formats: [WEBP]
        breakpoints: [750, 1050]
      )
    }
  }
`;
export default IndexPage;
