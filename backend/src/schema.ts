import { GraphQLSchema } from 'graphql';
import 'graphql-import-node';
import { makeExecutableSchema, makeRemoteExecutableSchema, introspectSchema } from 'graphql-tools';
import resolvers from './resolverMap';
import { createHttpLink } from 'apollo-link-http';
import * as typeDefs from './schema/schema.graphql';
import fetch from 'node-fetch';

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default schema;
