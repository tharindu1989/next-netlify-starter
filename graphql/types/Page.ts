import { Maybe, Scalars } from "./common";
import { Entry } from "./Entry";
import { HeroBanner } from "./HeroBanner";
import { TextContainer } from "./TextContainer";

export type Page = Entry & {
  __typename?: "Page";
  slug?: Maybe<Scalars["String"]>;
  contentCollection: PageElementsCollection;
};

export type PageElementsCollection = Entry & {
  __typename?: "PageElements";
  items: Array<HeroBanner | TextContainer>;
};
