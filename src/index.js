import './index.scss';
import {$on} from './helpers/DOMHelper';
import QuoteComponent from './components/QuoteComponent';
import QuotesAPI from './API';


let handler = (component) => {
    return () => {
        QuotesAPI.random().then(quote => {
            component.setQuoteValue(quote);
        });
    };
};

const start = QuotesAPI.random().then(quote => {
    let quoteComponent = new QuoteComponent();
    quoteComponent.setQuoteValue(quote);
    quoteComponent.bindNewQuote(handler(quoteComponent));
});

$on(window, 'load', start);

