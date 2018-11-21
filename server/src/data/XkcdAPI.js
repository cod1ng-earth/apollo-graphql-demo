import { RESTDataSource } from 'apollo-datasource-rest';

export default class XkcdAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'http://xkcd.com/';
    }

    async getComic(comicId) {
        return this.get(`${comicId}/info.0.json`);
    }

    async getComicOfTheDay() {
        return this.get(`info.0.json`);
    }
}

