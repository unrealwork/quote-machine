import HttpResponse from './HttpResponse'
import HttpStatus from './HttpStatus'
import HttpClientBuilder from './HttpClientBuilder'

class HttpClient {
    static builder(baseUrl) {
        return new HttpClientBuilder(baseUrl);
    }

    set baseURl(baseURl) {
        this._baseUrl = baseURl;
    }

    get baseURl() {
        return this._baseUrl;
    }

    get(path) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', this._baseUrl + path);

            xhr.onreadystatechange = state => {
                const DONE = 4; // readyState 4 means the request is done.
                if (xhr.readyState === DONE) {
                    if (xhr.status === HttpStatus.OK) {
                        resolve(new HttpResponse(xhr.responseText));
                    } if (xhr.status === HttpStatus.REDIRECT) {

                    }
                    else {
                        reject(new HttpResponse(xhr.responseText))
                    }
                }
            };
            xhr.send(null)
        });
    }
}

export default HttpClient;