import 'babel-polyfill';
import React from 'react';
import { Admin, Resource } from 'admin-on-rest';

import myApiRestClient from './restClient';
import './App.css';
import germanMessages from './i18n';
import { FlatEdit, FlatShow, FlatList } from './flat';
import FlatDelete from './flat/FlatDelete';
import authClient from './authClient';

const messages = {
    de: germanMessages,
};

const FlatApp = () => {
    return (
        <Admin authClient={authClient} restClient={myApiRestClient} title="Wohnung" locale="de" messages={messages}>
            <Resource name="flat" options={{ label: 'Wohnung' }} edit={FlatEdit} remove={FlatDelete} show={FlatShow} list={FlatList} />
        </Admin>
    );
};

export default FlatApp;
