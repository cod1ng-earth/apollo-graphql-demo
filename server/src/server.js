const { ApolloServer, gql } = require('apollo-server-express');

import DiscogsApi from "./data/DiscogsApi";
import XkcdAPI from './data/XkcdAPI';
import { schema } from './schema';

export const server = new ApolloServer({
    schema,
    dataSources: () => {
        return {
            xkcd: new XkcdAPI(),
            discogs: new DiscogsApi(),
        };
    },
});
