export default {
    typeDef: `
    extend type Query {
        artist(artistId: Int!): DiscogsArtist
    }
    type DiscogsArtist {
        id: Int!
        name: String
        profile: String
        uri: String
        urls: [String]
        images: [DiscogsImage]
    }
    type DiscogsImage {
        uri: String
        height: Int
        width: Int
        resource_url: String
        type: String
        uri150: String
    }
`,
    resolvers: {
        Query: {
            artist: async (_source, { artistId: artistId }, { dataSources }) => {
                return dataSources.discogs.getArtist(artistId);
            },
        }
    },
};
