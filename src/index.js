import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FlavorForm from './FlavorForm';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
   <FlavorForm />, document.getElementById('root'));
registerServiceWorker();
