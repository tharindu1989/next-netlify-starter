import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";

const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;
const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const environment = process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT;
const uri = `https://graphql.contentful.com/content/v1/spaces/${space}/environments/${environment}`;

export const apolloClient: ApolloClient<NormalizedCacheObject> =
  new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      credentials: "same-origin",
      headers: {
        authorization: `Bearer ${accessToken}`,
        "Content-Language": "en-us",
      },
      uri,
    }),
  });
