import 'babel-polyfill';
import React, { Component } from 'react';
import { Admin, Resource} from 'admin-on-rest';
import myApiRestClient from './restClient';
import './App.css';
import germanMessages from './i18n';
import { FlatList, FlatEdit } from './flats';

const messages = {
    'de': germanMessages,
};

class App extends Component {
    render() {
        return(
            <Admin restClient={myApiRestClient} title="Wohnungen" locale="de" messages={messages}>
                <Resource name="flats" options={{ label: 'Wohnungen' }} list={FlatList} edit={FlatEdit} />
            </Admin>
        );
    };
};

export default App;