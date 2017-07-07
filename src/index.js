import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './components/App.js';
import Base from './components/Base.js';
import HomePage from './components/HomePage.js';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Route, BrowserRouter, Router } from 'react-router-dom';
import './styles/index.css';
//import createHistory from 'history/createBrowserHistory';

import registerServiceWorker from './registerServiceWorker';

// remove tap delay, essential for MaterialUI to work properly
injectTapEventPlugin();

ReactDOM.render(
    <MuiThemeProvider muiTheme={getMuiTheme()}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </MuiThemeProvider>
, document.getElementById('root'));
registerServiceWorker();
