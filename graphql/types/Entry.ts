import { ContentfulMetadata, Scalars, Sys } from "./common";

export type Entry = {
  __typename: Scalars["String"];
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
};
