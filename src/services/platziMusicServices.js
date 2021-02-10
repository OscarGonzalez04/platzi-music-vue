import axios from 'axios';
import configService from "./config.js";

export default {
    getEvents(q, type) {
        return this.api().get('/search', {q, type} )
    },

    api() {
        return axios.create({
            baseURL: configService.apiUrl,
            withCredentials: false,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
    }
}