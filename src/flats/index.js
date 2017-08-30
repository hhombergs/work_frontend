import React from 'react';
import { CardActions } from 'material-ui/Card';
import {Create, Datagrid, DateField, DateInput, Delete, DisabledInput, Edit, EditButton, EmailField, List, ListButton, RefreshButton, SimpleForm, TextField, TextInput, } from 'admin-on-rest';
import FullTitleField from './FullTitleField';
import FlatDeleteButton from './FlatDeleteButton';

export const FlatList = (props) => (
    <List {...props} title="Alle Wohnungen" sort={{ field: 'enter_date', order: 'DESC' }} perPage={25}>
        <Datagrid>
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

const FlatEditActions = ({ basePath, data }) => (
    <CardActions style={{ float: 'right' }}>
        <ListButton basePath={basePath} />
        <RefreshButton basePath={basePath} />
        <FlatDeleteButton basePath={basePath} record={data} />
    </CardActions>
);

export const FlatCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <DateInput source="enter_date" label="Einzugsdatum" validation={{ required: true }} />
            <TextInput source="street" label="Strasse" validation={{ required: true }} />
            <TextInput source="zip" label="PLZ" validation={{ required: true }} />
            <TextInput source="city" label="Ort" validation={{ required: true }} />
            <TextInput source="country" label="Land" validation={{ required: true }} />
            <TextInput source="contact_email" label="Kontakt Email" type="email" validation={{ email: true, required: true }} />
        </SimpleForm>
    </Create>
);

const FlatTitle = ({ record }) => record ? <FullTitleField record={record} size={32} /> : null;

export const FlatEdit = (props) => (
    <Edit actions={<FlatEditActions />} title={<FlatTitle />} {...props}>
        <SimpleForm>
            <DateInput source="enter_date" label="Einzugsdatum" />
            <TextInput source="street" label="Strasse" />
            <TextInput source="zip" label="PLZ" />
            <TextInput source="city" label="Ort" />
            <TextInput source="country" label="Land" />
            <TextInput source="contact_email" label="Kontakt Email" type="email" validation={{ email: true }} />
        </SimpleForm>
    </Edit>
);

