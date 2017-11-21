export default class QuoteComponent {

    constructor(quote) {
        this._quote = quote;
    }

    render() {
        var quoteBox = document.createElement('pre');
        quoteBox.appendChild(document.createTextNode(this._quote))
        document.body.appendChild(quoteBox);
    }
}