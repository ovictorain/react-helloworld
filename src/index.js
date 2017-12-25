import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AFTScrollListener from './AFTScrollListener';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<AFTScrollListener onScroll={() => {console.log(`requestAnimationFrame is a way of queuing a function to be executed in the browser at the optimal time for rendering performance.
  A function that is queued with requestAnimationFrame will fire in the next frame. `);}}/>, document.getElementById('root'));
registerServiceWorker();
