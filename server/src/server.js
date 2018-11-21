import XkcdAPI from './data/XkcdAPI';

const { ApolloServer, gql } = require('apollo-server-express');

import { schema } from './schema';

export const server = new ApolloServer({
    schema,
    dataSources: () => {
        return {
            xkcd: new XkcdAPI(),
        };
    },
});

