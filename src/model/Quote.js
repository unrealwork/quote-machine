/**
 * @typedef {!{quote: number, author: string}}
 */
export class Quote {
    /**
     * Create quote.
     * @param quote
     * @param author
     */
    constructor(quote, author) {
        this.quote = quote;
        this.author = author;
    }
}