// GraphQL

import { apolloClient } from "graphql/client/apolloClient";
import { Page } from "graphql/query/Page";
import { Paths } from "graphql/types/common";

export const queryPagePaths = async (preview: boolean): Promise<Paths> => {
  try {
    const {
      data: {
        pageCollection: { items },
      },
    } = await apolloClient.query({ query: Page, variables: { preview } });

    return items.map(({ slug }) => ({
      params: { slug: slug },
    }));
  } catch (e) {
    console.log(JSON.stringify(e));
    return [];
  }
};
