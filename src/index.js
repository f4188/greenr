import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import './bootstrap.min.css'
import App from './App';

import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter } from 'react-router-dom'

ReactDOM.render((
	<App />
	), document.getElementById('root'));
registerServiceWorker();
