import { RESTDataSource } from 'apollo-datasource-rest';

export default class DiscogsApi extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://api.discogs.com/';
    }

    async getArtist(artistId) {
        return this.get(`/artists/${artistId}`);
    }

    async searchForArtists(searchTerm) {
        return this.get(`/database/search?q=${searchTerm}&type=artist`);
    }

    // getRandomHash() {
    //     return '#_' + Math.random().toString(36).substr(2, 9);
    // }
}

