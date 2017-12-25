import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import DebounceSearchbox from './DebounceSearchbox';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<DebounceSearchbox defaultValue="victor" onChange={() => {console.log(`Debouncing ensures that a function will not be executed until after a certain amount of time has passed since it was last called`);}}/>, document.getElementById('root'));
registerServiceWorker();
