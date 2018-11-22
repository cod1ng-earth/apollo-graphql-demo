export default {
    typeDef: `
    extend type Query {
        search(searchTerm: String!): YouTubeSearchResult
    }
    type YouTubeSearchResult {
        etag: String
        items: [YouTubeSearchResultItem]
    }
    type YouTubeSearchResultItem {
        kind: String
        etag: String
        id: YouTubeResource
        snippet: YouTubeSnippet         
    }
    type YouTubeResource {
        kind: String
        videoId: String
        channelId: String
        playlistId: String
    }
    type YouTubeSnippet {
        publishedAt: String
        channelId: String
        title: String
        description: String
    }
`,
    resolvers: {
        Query: {
            search: async (_source, { searchTerm: searchTerm }, { dataSources }) => {
                return dataSources.youtube.searchFor(searchTerm);
            },
        }
    },
};
