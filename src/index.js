import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import EssayForm from './EssayForm';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
   <EssayForm />, document.getElementById('root'));
registerServiceWorker();
