import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './App'

document.addEventListener("DOMContentLoaded", function () {
    App.main()
});

registerServiceWorker();
