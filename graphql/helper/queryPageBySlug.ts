// GraphQL

import { apolloClient } from "graphql/client/apolloClient";
import { PageBySlug } from "graphql/query/pageBySlug";
import { Page } from "graphql/types/Page";

export const queryPageBySlug = async (
  slug: string,
  preview: boolean
): Promise<Page> => {
  const {
    data: {
      pageCollection: {
        items: [page],
      },
    },
  } = await apolloClient.query({
    query: PageBySlug,
    variables: { slug, preview },
  });

  return page;
};
