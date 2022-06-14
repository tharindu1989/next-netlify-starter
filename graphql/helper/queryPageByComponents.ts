import { Page } from "graphql/types/Page";
import { queryHeroBannerById } from "./queryHeroBannerById";

export const getComponents = async (
  items: Array<{
    __typename: string;
    sys: { id: string };
  }>,
  preview: boolean
) => {
  const components = [] as Array<any>;
  let component;

  for (let i = 0; i < items.length; i++) {
    const type = items[i].__typename;
    const id = items[i].sys?.id;

    switch (type) {
      case "HeroBanner":
        component = await queryHeroBannerById(id, preview);
        components.push(component);
        break;
    }
  }

  return components;
};

export const getPageByComponents = async (
  page: Page,
  preview: boolean
): Promise<Page> => {
  const components = await getComponents(page.contentCollection.items, preview);
  return {
    ...page,
    contentCollection: {
      ...page.contentCollection,
      items: components,
    },
  };
};
