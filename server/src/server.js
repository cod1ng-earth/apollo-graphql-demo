const { ApolloServer, gql } = require('apollo-server-express');

import DiscogsApi from "./data/DiscogsApi";
import XkcdAPI from './data/XkcdAPI';
import YouTubeApi from "./data/YouTubeApi";
import { schema } from './schema';

export const server = new ApolloServer({
    schema,
    dataSources: () => {
        return {
            xkcd: new XkcdAPI(),
            discogs: new DiscogsApi(),
            youtube: new YouTubeApi(),
        };
    },
});
