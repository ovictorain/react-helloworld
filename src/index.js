import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ThrottleLoadMoreButton from './ThrottleLoadMoreButton';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<ThrottleLoadMoreButton loadMore={() => {console.log(`Throttling prevents a function from being called more than once in a given window of time.
The example below throttles a “click” handler to prevent calling it more than once per second.`);}}/>, document.getElementById('root'));
registerServiceWorker();
