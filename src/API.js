import axios from 'axios';


/**
 * Default QuotesAPI for Quote service.
 */
export class QuotesAPI {
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

/**
 * API for tweeter.
 */
export class TweeterAPI {
    /**
     * Retrieve {AxiosInstance} http client.
     * @returns {AxiosInstance}
     */
    static get client() {
        return axios.create({
            baseURL: 'https://twitter.com',
            timeout: 1000,
            headers: {}
        });
    }


    /**
     * Tweet a quote
     * @param quote
     */
    static tweet(quote) {
        return this.client.get('intent/tweet', {
            params: {
                hashtags: 'quote',
                text: `"${quote.quote}" ${quote.author}`
            }
        });
    }
}