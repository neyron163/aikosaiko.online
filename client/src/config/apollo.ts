import ApolloClient from 'apollo-boost';
import {InMemoryCache} from 'apollo-cache-inmemory';

const cache = new InMemoryCache();

export default new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache,
});
