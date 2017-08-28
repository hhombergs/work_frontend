import 'babel-polyfill';
import React, { Component } from 'react';
//import { jsonServerRestClient, Admin, Delete, Resource } from 'admin-on-rest';
import { jsonServerRestClient, Admin, Resource } from 'admin-on-rest';
import './App.css';

import { FlatList } from './flats';

class App extends Component {
    render() {
        return (
            <Admin title="Wohnungen" restClient={jsonServerRestClient('http://127.0.0.1:8000')}>
                <Resource name="flats" options={{ label: 'Wohnungen' }} list={FlatList} />
            </Admin>
        );
    }
}

export default App;
