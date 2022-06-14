import gql from "graphql-tag";

export const PageBySlug = gql`
  query PageBySlug($slug: String!, $preview: Boolean!) {
    pageCollection(limit: 1, where: { slug: $slug }, preview: $preview) {
      items {
        sys {
          id
        }
        contentCollection(limit: 20) {
          items {
            __typename
            ... on HeroBanner {
              sys {
                id
              }
            }
          }
        }
        slug
      }
    }
  }
`;
