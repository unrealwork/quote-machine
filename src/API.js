import axios from 'axios';

/**
 * Default API for Quote service.
 */
class API {
    /**
     * Retrieve {AxiosInstance} http client.
     * @returns {AxiosInstance}
     */
    static get client() {
        return axios.create({
            baseURL: 'https://andruxnet-random-famous-quotes.p.mashape.com',
            timeout: 1000,
            headers: {
                'X-Mashape-Key': 'OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V'
            }
        });
    }

    /**
     * Retrive random quote.
     * @returns {Promise.<Quote>}
     */
    static random() {
        return this.client.get('cat=')
            .then(resp => {
                return resp.data;
            }).catch(() => {
                throw new Error('Failed to get a quote');
            });
    }
}

export default API;