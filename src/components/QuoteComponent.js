import {$on, qs} from './../helpers/DOMHelper';
import {Quote} from '../model/Quote';

/**
 * View for Quote quote instance.
 */
export default class QuoteComponent {
    /**
     * Default constructor.
     */
    constructor() {
        this.$quote = qs('#quote');
        this.$newQuoteButton = qs('button#new-quote');
        this.$authorText = qs('#quote-author');
        this.$tweetQuoteButton = qs('#tweet-quote');
    }

    /**
     * Set value to quote component.
     * @param {Quote} quote
     */
    setQuoteValue(quote) {
        this.$quote.innerText = quote.quote;
        this.$authorText.innerText = `-  ${quote.author}`;
        this.$tweetQuoteButton.setAttribute('href', `https://twitter.com/intent/tweet?hashtags=quote&text="${quote.quote}" ${quote.author}`);
    }

    /**
     * Get loaded quote
     */
    getQuote() {
        return new Quote(this.$quote.innerText, this.$authorText.innerText.substr(2));
    }

    /**
     * Bind action to newQuote Button.
     * @param handler
     */
    bindNewQuote(handler) {
        $on(this.$newQuoteButton, 'click', handler);
    }


    /**
     * Bind action to tweetQuote Button.
     *
     * @param handler
     */
    bindTweetButton(handler) {
        $on(this.$tweetQuoteButton, 'click', handler);
    }
}