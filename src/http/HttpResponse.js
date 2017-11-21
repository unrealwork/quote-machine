class HttpResponse {
    constructor(body) {
        this._body = body;
    }

    json() {
        return JSON.parse(this._body);
    }
}

export default HttpResponse