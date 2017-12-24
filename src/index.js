import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Welcome from './ClassWelcome';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<Welcome name="Victor"/>, document.getElementById('root'));
registerServiceWorker();
