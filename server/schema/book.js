const books = require('../data/books');

module.exports = {
    typeDef: `
    extend type Query {
        books: [Book]
    }
    type Book {
        title: String
        author: String
    }
`,
    resolvers: {
        Query: {
            books: () => books.data,
        },
    }
}
