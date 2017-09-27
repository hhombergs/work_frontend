import 'babel-polyfill';
import React from 'react';
import { Admin, Resource } from 'admin-on-rest';
import myApiRestClient from './restClient';
import './styles/App.scss';
import germanMessages from './i18n';
import authClient from './authClientMain';
import { FlatList, FlatEdit, FlatCreate, FlatShow } from './flats';
import FlatDelete from './flats/FlatDelete';

const messages = {
    de: germanMessages,
};
messages.de.aor.auth.username = 'Bentuzername';

const App = () => (
    <Admin restClient={myApiRestClient} title="Wohnungen" locale="de" messages={messages} authClient={authClient}>
        <Resource name="flats" options={{ label: 'Wohnungen' }} list={FlatList} edit={FlatEdit} create={FlatCreate} show={FlatShow} remove={FlatDelete} />
    </Admin>
);

export default App;
