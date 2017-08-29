import React from 'react';
import {Datagrid, DateField, DateInput, DisabledInput, Edit, EditButton, EmailField, List, SimpleForm, TextField, TextInput, } from 'admin-on-rest';
import FullTitleField from './FullTitleField';

export const FlatList = (props) => (
    <List {...props} title="Alle Wohnungen" sort={{ field: 'enter_date', order: 'DESC' }} perPage={25}>
        <Datagrid>
            <TextField source="id" label="ID" />
            <DateField source="enter_date" options={{day: '2-digit', month:'2-digit', year: 'numeric'}} label="Einzugsdatum" />
            <TextField source="street" label="Straße" />
            <TextField source="zip" label="Postleitzahl" />
            <TextField source="city" label="Ort" />
            <TextField source="country" label="Land" />
            <EmailField source="contact_email" label="Kontakt Email" />
            <EditButton />
        </Datagrid>
    </List>
)

const FlatTitle = ({ record }) => record ? <FullTitleField record={record} size={32} /> : null;

export const FlatEdit = (props) => (
    <Edit title={<FlatTitle />} {...props}>
        <SimpleForm>
            <DisabledInput label="Id" source="id" />
            <DateInput source="enter_date" label="Einzugsdatum" />
            <TextInput source="street" label="Strasse" />
            <TextInput source="zip" label="PLZ" />
            <TextInput source="city" label="Ort" />
            <TextInput source="country" label="Land" />
            <TextInput source="contact_email" label="Kontakt Email" type="email" validation={{ email: true }} />
        </SimpleForm>
    </Edit>
);