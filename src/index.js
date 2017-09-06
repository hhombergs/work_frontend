import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FlatApp from './FlatApp';
import './index.css';

let isMain = true;
if (window.location.href.indexOf('/flat/') !== -1) {
    isMain = false;
}

if (isMain === true) {
    ReactDOM.render(
        <App />,
        document.getElementById('root'),
    );
} else {
    ReactDOM.render(
        <FlatApp />,
        document.getElementById('root'),
    );
}
