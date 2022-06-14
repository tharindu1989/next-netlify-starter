import gql from "graphql-tag";

export const HeroBannerById = gql`
  query HeroBannerById($id: String!, $preview: Boolean!) {
    heroBannerCollection(
      limit: 1
      where: { sys: { id: $id } }
      preview: $preview
    ) {
      items {
        title
      }
    }
  }
`;
