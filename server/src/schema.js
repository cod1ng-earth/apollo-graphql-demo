const _ = require('lodash');
import { makeExecutableSchema } from 'graphql-tools';

import Book from './schema/book';
import Xkcd from './schema/xkcd';

// If you had Query fields not associated with a
// specific type you could put them here
const Query = `
  type Query {
    _empty: String
  }
`;

const resolvers = {};

export const schema = makeExecutableSchema({
    typeDefs: [
        Query,
        Book.typeDef,
        Xkcd.typeDef,
    ],
    resolvers: _.merge(
        resolvers,
        Book.resolvers,
        Xkcd.resolvers,
    ),
})
