import {$on, qs} from './../helpers/DOMHelper';

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
    }

    /**
     * Set value to quote component.
     * @param {Quote} quote
     */
    setQuoteValue(quote) {
        this.$quote.innerText = quote.quote;
        this.$authorText.innerText = `-  ${quote.author}`;
    }

    /**
     * Bind action to newQuote Button.
     * @param handler
     */
    bindNewQuote(handler) {
        $on(this.$newQuoteButton, 'click', handler);
    }
}