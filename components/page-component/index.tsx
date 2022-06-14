import HeroBannerView from "components/hero-banner"; 
import { PageElementsCollection } from "graphql/types/Page";

interface Props {
  pageElementsCollection: PageElementsCollection;
}

export default function PageComponentView({ pageElementsCollection }: Props) {
  const items = pageElementsCollection.items;
  return (
    <>
      {items.map((component, idx) => {
        switch (component.__typename) {
          case "HeroBanner":
            return <HeroBannerView data={component} key={idx} />;
          case "TextContainer":
            return <div key={idx} />;
          default:
            return <></>;
        }
      })}
    </>
  );
}
