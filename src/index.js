import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import './index.css';
import {initStates} from './states/_index';
import {BrowserRouter} from 'react-router-dom';

initStates();


ReactDOM.render(
    (
        <BrowserRouter>
          <App/>
        </BrowserRouter>
    ),
	document.getElementById('root')
);
