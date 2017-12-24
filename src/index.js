import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Reservation from './Reservation';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
   <Reservation />, document.getElementById('root'));
registerServiceWorker();
