import axios from 'axios';
import configService from "./config.js";

export default {
    search(q, type="track") {
        return this.api().get('/search',{ params: {q, type} }).then(response => response.data)
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