import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './App';
import FlatApp from './FlatApp';
import './index.css';

let isMain = true;

try {
    injectTapEventPlugin();
} catch (e) {
    // do nothing
}

if (window.location.href.indexOf('/flat/') !== -1) {
    isMain = false;
}

if (isMain === true) {
    ReactDOM.render(<App />, document.getElementById('root'));
} else {
    ReactDOM.render(<FlatApp />, document.getElementById('root'));
}
