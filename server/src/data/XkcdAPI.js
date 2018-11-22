import { RESTDataSource } from 'apollo-datasource-rest';

export default class XkcdAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'http://xkcd.com/';
    }

    async getComic(comicId) {
        return this.get(`${comicId}/info.0.json` + this.getRandomHash());
    }

    async getComicOfTheDay() {
        return this.get(`info.0.json` + this.getRandomHash());
    }

    getRandomHash() {
        return '#_' + Math.random().toString(36).substr(2, 9);
    }
}

