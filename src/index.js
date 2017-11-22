import './index.scss';
import {$on} from './helpers/DOMHelper';
import QuoteComponent from './components/QuoteComponent';
import {QuotesAPI, TweeterAPI} from './API';


const newQuoteAction = (component) => {
    return () => {
        QuotesAPI.random().then(quote => {
            component.setQuoteValue(quote);
        });
    };
};

const tweetQuoteAction = (quote) => {
    return () => {
        TweeterAPI.tweet(quote);
    };
};

const start = QuotesAPI.random().then(quote => {
    let quoteComponent = new QuoteComponent();
    quoteComponent.setQuoteValue(quote);
    quoteComponent.bindNewQuote(newQuoteAction(quoteComponent));
    quoteComponent.bindTweetButton(tweetQuoteAction(quoteComponent.getQuote()));
});


$on(window, 'load', start);

