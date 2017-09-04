import 'babel-polyfill';
import React, { Component } from 'react';
import { Admin, Resource} from 'admin-on-rest';
import { Route } from 'react-router-dom';

import myApiRestClient from './restClient';
import './App.css';
import germanMessages from './i18n';
import { FlatEdit, FlatShow, FlatList} from './flat';
import FlatDelete from './flat/FlatDelete';
import authClient from './authClient';

const messages = {
    'de': germanMessages,
};

class FlatApp extends Component {

    render() {
        return(
            <Admin authClient={authClient} restClient={myApiRestClient} title="Wohnung" locale="de" messages={messages}>
                <Resource name="flat" options={{ label: 'Wohnung' }} edit={FlatEdit} remove={FlatDelete} show={FlatShow} list={FlatList} />
            </Admin>
        );
    };
};

export default FlatApp;
