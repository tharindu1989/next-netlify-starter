import { Maybe, Scalars } from "./common";
import { Entry } from "./Entry";

export type TextContainer = Entry & {
  __typename?: "TextContainer";
  title: Maybe<Scalars["String"]>;
};
