import 'babel-polyfill';
import React, { Component } from 'react';
import { Admin, Resource} from 'admin-on-rest';
import myApiRestClient from './restClient';
import './App.css';
import germanMessages from './i18n';
import { FlatList, FlatEdit, FlatCreate, FlatShow } from './flats';
import FlatDelete from './flats/FlatDelete';

const messages = {
    'de': germanMessages,
};

class App extends Component {
    render() {
        return(
            <Admin restClient={myApiRestClient} title="Wohnungen" locale="de" messages={messages}>
                <Resource name="flats" options={{ label: 'Wohnungen' }} list={FlatList} edit={FlatEdit} create={FlatCreate} show={FlatShow} remove={FlatDelete} />
            </Admin>
        );
    };
};

export default App;