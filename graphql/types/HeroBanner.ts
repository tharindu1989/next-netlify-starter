import { Maybe, Scalars } from "./common";
import { Entry } from "./Entry";

export type HeroBanner = Entry & {
  __typename?: "HeroBanner";
  title: Maybe<Scalars["String"]>;
};
