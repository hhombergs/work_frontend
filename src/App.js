import 'babel-polyfill';
import React, { Component } from 'react';
import { jsonServerRestClient, Admin, Resource } from 'admin-on-rest';
import './App.css';
import germanMessages from './i18n';
import { FlatList, FlatEdit } from './flats';

const messages = {
    'de': germanMessages,
};

class App extends Component {
    render() {
        return(
            <Admin restClient={jsonServerRestClient("http://127.0.0.1:8000")} title="Wohnungen" locale="de" messages={messages}>
                <Resource name="flats" options={{ label: 'Wohnungen' }} list={FlatList} edit={FlatEdit}/>
            </Admin>
        );
    };
};

export default App;