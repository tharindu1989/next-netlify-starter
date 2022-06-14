// GraphQL

import { apolloClient } from "graphql/client/apolloClient";
import { HeroBannerById } from "graphql/query/HeroBannerById";
import { HeroBanner } from "graphql/types/HeroBanner";

export const queryHeroBannerById = async (
  id: string,
  preview: boolean
): Promise<HeroBanner> => {
  const {
    data: {
      heroBannerCollection: {
        items: [hero],
      },
    },
  } = await apolloClient.query({
    query: HeroBannerById,
    variables: { id, preview },
  });

  return hero;
};
