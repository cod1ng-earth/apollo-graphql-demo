export default {
    typeDef: `
    extend type Query {
        comic(comicId: Int): Comic
    }
    type Comic {
        num: Int!
        title: String
        safe_title: String
        year: String
        month: String
        day: String
        img: String
        alt: String
        link: String
        news: String
        transcript: String
    }
`,
    resolvers: {
        Query: {
            comic: async (_source, { comicId: comicId }, { dataSources }) => {
                if (comicId) {
                    return dataSources.xkcd.getComic(comicId);
                }

                return dataSources.xkcd.getComicOfTheDay();
            },
        }
    },
};
