import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import './index.css';
import {initStates} from './states/_index';

initStates();


ReactDOM.render(
    <App/>,
	document.getElementById('root')
);
