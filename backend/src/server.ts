import express from 'express';
import {ApolloServer} from 'apollo-server-express';
import {mergeSchemas} from 'graphql-tools';
import { getIntrospectSchema } from './introspection';
import query from 'qs-middleware';

//our graphql endpoints
const endpoints = [
	'http://localhost:4001/graphql',
];

(async function () {
	try {
		//promise.all to grab all remote schemas at the same time, we do not care what order they come back but rather just when they finish
    const allSchemas = await Promise.all(endpoints.map(ep => getIntrospectSchema(ep)));

    const server = new ApolloServer({ schema: mergeSchemas({ schemas: allSchemas }) });
    //create function for /graphql endpoint and merge all the schemas
    const app = express();
    const path = '/graphql';
    
    app.use(query());
    server.applyMiddleware({ app, path });
    
    app.listen({ port: 4000 }, () =>
      console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
    );
	} catch (error) {
		console.log('ERROR: Failed to grab introspection queries', error);
	}
})();