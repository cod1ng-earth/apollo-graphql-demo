const _ = require('lodash');
const data = require('../data/db');

module.exports = {
    typeDef: `
    extend type Query {
        books: [Book]
        book(isbn: String!): Book
    }
    type Book {
        isbn: String!
        title: String
        author: String
    }
`,
    resolvers: {
        Query: {
            books: () => data.books,
            book: (parent, { isbn }) => {
                return _.find(data.books, ['isbn', isbn]);
            },
        }
    },
};
