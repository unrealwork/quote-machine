import HttpClient from './http/HttpClient'

class API {
    static client = HttpClient
        .builder("http://quotes.rest")
        .build();

    static newQuote() {
        return this.client.get("/qod.json")
            .then(resp => {
                return resp.json()
            })
            .catch(() => {
                throw new Error('Failed to get a quote')
            });
    };
}

export default API;