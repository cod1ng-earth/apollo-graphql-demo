import { RESTDataSource } from 'apollo-datasource-rest';

const maxResults = 5;
const sortOrder = 'rating';
const searchType = 'video';

export default class YouTubeApi extends RESTDataSource {

    constructor() {
        super();
        this.baseURL = 'https://www.googleapis.com/youtube/v3';
    }

    async searchFor(searchTerm) {
        return this.get(`/search?part=snippet`
            + `&type=${searchType}`
            + `&order=${sortOrder}`
            + `&maxResults=${maxResults}`
            + `&q=${searchTerm}` + YouTubeApi.addApiKey()
        );
    }

    static addApiKey() {
        return '&key=' + process.env.API_KEY_YOUTUBE;
    }
}

