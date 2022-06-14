import { PageComponentView } from "components";
import { Page } from "graphql/types/Page";
import { getPageByComponents } from "../graphql/helper/queryPageByComponents";
import { queryPageBySlug } from "../graphql/helper/queryPageBySlug";
import { queryPagePaths } from "../graphql/helper/queryPagePaths";

interface Props {
  page: Page | null;
}

export default function Slug({ page }: Props) {
  if (page?.contentCollection)
    return (
      <PageComponentView pageElementsCollection={page?.contentCollection} />
    );

  return <></>;
}

export async function getStaticPaths() {
  const preview = process.env.NEXT_PUBLIC_PREVIEW_MODE === "true";
  const paths = await queryPagePaths(preview);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const preview = process.env.NEXT_PUBLIC_PREVIEW_MODE === "true";

  const pageComponentsId = await queryPageBySlug(params.slug, preview);
  const page = await getPageByComponents(pageComponentsId, preview);
  return {
    props: {
      page,
    },
    revalidate: 10,
  };
}
