import fetch from "isomorphic-fetch";
import { HttpLink } from 'apollo-link-http';
import {makeRemoteExecutableSchema, introspectSchema} from "graphql-tools";

export const getIntrospectSchema = async (url: string) => {
  // Create a link to a GraphQL instance by passing fetch instance and url
  const link = new HttpLink({
    uri: url,
    fetch
  });

  // Fetch our schema
  const schema = await introspectSchema(link);

  // make an executable schema
  return makeRemoteExecutableSchema({
    schema: schema,
    link: link
  });
};
