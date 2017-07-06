import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import HomePage from './components/HomePage.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<HomePage />, document.getElementById('root'));
registerServiceWorker();
