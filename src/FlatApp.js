import 'babel-polyfill';
import React, { Component } from 'react';
import { Admin, Resource} from 'admin-on-rest';
import { Route } from 'react-router-dom';

import myApiRestClient from './restClient';
import './App.css';
import germanMessages from './i18n';
import { FlatEdit, FlatShow, } from './flat';
import FlatDelete from './flat/FlatDelete';


const messages = {
    'de': germanMessages,
};

const customRoutes = [
    <Route exact hasEdit hasDelete path="/#/flat/:id/:token/show/" component={FlatShow} />,
];

class FlatApp extends Component {

    render() {
        return(
            <Admin customRoutes={customRoutes} restClient={myApiRestClient} title="Wohnung" locale="de" messages={messages}>
                <Resource name="flat" options={{ label: 'Wohnung' }} edit={FlatEdit} remove={FlatDelete} />
            </Admin>
        );
    };
};

export default FlatApp;
