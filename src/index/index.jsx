import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import AtRest from 'react-at-rest';
import './index.css';

import App from './index_app.jsx';

// our test API doesn't envelope the response
AtRest.Store.API_ENVELOPE = false;


ReactDOM.render(<App />, document.getElementById('root'));
