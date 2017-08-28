import React from 'react';
//import {Datagrid, DateField, DateInput, Delete, Edit, EmailField, EmailInput, FormTab, List, TabbedForm, TextField, TextInput, } from 'admin-on-rest';
import {Datagrid, DateField, EmailField, List, TextField, } from 'admin-on-rest';

export const FlatList = (props) => (
    <List {...props} title="Alle Wohnungen">
        <Datagrid>
            <TextField source="id" label="ID" />
            <DateField source="enter_date" options={{day: '2-digit', month:'2-digit', year: 'numeric'}} label="Einzugsdatum" />
            <TextField source="street" label="Straße" />
            <TextField source="zip" label="Postleitzahl" />
            <TextField source="city" label="Ort" />
            <TextField source="country" label="Land" />
            <EmailField source="contact_email" label="Kontakt Email" />
        </Datagrid>
    </List>
)
