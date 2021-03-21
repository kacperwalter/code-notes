import React from 'react';
import ReactDOM from 'react-dom';

import './main.css';

const App = (props) => {
    return <h1>{props.test}</h1>;
}
const someText = 'Working coool';

ReactDOM.render(
    <App test={someText}/>,
    document.getElementById('root'),
)