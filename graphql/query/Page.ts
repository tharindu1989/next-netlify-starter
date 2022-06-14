import gql from "graphql-tag";

export const Page = gql`
  query Page($limit: Int, $preview: Boolean!) {
    pageCollection(limit: $limit, preview: $preview) {
      items {
        slug
      }
    }
  }
`;
