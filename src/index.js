import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import './index.css';
import {initStores} from './states/_index';

initStores();

ReactDOM.render(
    <App/>,
	document.getElementById('root')
);
