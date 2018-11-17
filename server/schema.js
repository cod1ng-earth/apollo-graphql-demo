const _ = require('lodash');
const GraphqlTools = require('graphql-tools');

const Book = require ('./schema/book');

// If you had Query fields not associated with a
// specific type you could put them here
const Query = `
  type Query {
    _empty: String
  }
`;

const resolvers = {};

module.exports = {
    executableSchema: GraphqlTools.makeExecutableSchema({
        typeDefs: [ Query, Book.typeDef ],
        resolvers: _.merge(resolvers, Book.resolvers),
    })
}
