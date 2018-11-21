export default {
    typeDef: `
    extend type Query {
        comic(comicId: Int!): Comic
    }
    type Comic {
        num: Int!
        title: String
        year: String
        day: String
    }
`,
    resolvers: {
        Query: {
            comic: async (_source, { comicId: comicId }, { dataSources }) => {
                return dataSources.xkcd.getComic(comicId);
            },
        }
    },
};
