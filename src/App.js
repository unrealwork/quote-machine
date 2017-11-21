import './App.css';
import QuotesAPI from './API'
import QuoteComponent from './components/QuoteComponent'

class App {
    static main() {
        QuotesAPI.newQuote().then(quote => {
            let quoteText = quote.contents.quotes[0].quote;
            new QuoteComponent(quoteText).render();
        });

    }
}


export default App;
