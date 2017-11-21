import HttpClient from './HttpClient'


class HttpClientBuilder {
    constructor(baseUrl) {
        this._client = new HttpClient();
        this._client._baseUrl = baseUrl;
    }

    build() {
        return this._client
    }
}

export default HttpClientBuilder;