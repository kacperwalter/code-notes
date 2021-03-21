import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import './main.css';

const someText = 'Working coool';

ReactDOM.render(
    <App test={someText}/>,
    document.getElementById('root'),
)