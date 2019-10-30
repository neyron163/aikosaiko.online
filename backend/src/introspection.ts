import fetch from "isomorphic-fetch";
import { ApolloLink } from 'apollo-link';
import { HttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";
import { RetryLink } from "apollo-link-retry";
import { makeRemoteExecutableSchema, introspectSchema } from "graphql-tools";

export const getIntrospectSchema = async (url: string) => {
  // Create a link to a GraphQL instance by passing fetch instance and url
  const request = new HttpLink({
    uri: url,
    fetch
  });

  const error = onError(({ graphQLErrors, networkError, forward }: any) => {
    if (graphQLErrors)
      graphQLErrors.forEach(({ message, locations, path }: any) => {
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      }
      );
    if (networkError) {
      console.log(`[Network error]: ${networkError}`);
    }
  });
  
  // handle errors
  const handleErrors = error.concat(request);

  // retry request if we have error from server
  const retryRequest = new RetryLink({
    delay: {
      initial: 300,
      max: Infinity,
      jitter: true
    },
    attempts: {
      max: 5,
      retryIf: (error, _operation) => !!error
    }
  });

  // compose apollo link
  const link = ApolloLink.from([
    retryRequest,
    handleErrors
  ]);

  // Fetch our schema
  const schema = await introspectSchema(link);

  // make an executable schema
  return makeRemoteExecutableSchema({
    schema,
    link
  });
};
