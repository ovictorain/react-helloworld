import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NameForm from './NameForm';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
   <NameForm />, document.getElementById('root'));
registerServiceWorker();
