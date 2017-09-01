import React from 'react';
import { CardActions } from 'material-ui/Card';
import {Create, Datagrid, DateField, DateInput, DeleteButton, DisabledInput, Edit, EditButton, EmailField, List, ListButton, RefreshButton, Show,  ShowButton, SimpleForm, SimpleShowLayout, TextField, TextInput, } from 'admin-on-rest';
import FullTitleField from './FullTitleField';

export const FlatList = (props) => (
    <List {...props} title="Alle Wohnungen" sort={{ field: 'enter_date', order: 'DESC' }} perPage={25}>
        <Datagrid>
            <DateField source="enter_date" options={{day: '2-digit', month:'2-digit', year: 'numeric'}} label="Einzugsdatum" />
            <TextField source="street" label="Straße" />
            <TextField source="zip" label="Postleitzahl" />
            <TextField source="city" label="Ort" />
            <TextField source="country" label="Land" />
            <EmailField source="contact_email" label="Kontakt Email" />
            <ShowButton />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
)

const dateString = v => {
  if (isNaN(v)) return;

  let parsedDate = new Date(v);
  let adjustedDate = new Date(parsedDate.getTime() - parsedDate.getTimezoneOffset() * 60000);

  return adjustedDate;
};

export const FlatCreate = (props) => (
    <Create title="Wohnung anlegen" {...props}>
        <SimpleForm redirect="list">
            <DateInput source="enter_date" label="Einzugsdatum" validation={{ required: true }} parse={dateString} />
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
    <Edit title={<FlatTitle />} {...props}>
        <SimpleForm>
            <DateInput source="enter_date" label="Einzugsdatum" parse={dateString} />
            <TextInput source="street" label="Strasse" />
            <TextInput source="zip" label="PLZ" />
            <TextInput source="city" label="Ort" />
            <TextInput source="country" label="Land" />
            <TextInput source="contact_email" label="Kontakt Email" type="email" validation={{ email: true }} />
        </SimpleForm>
    </Edit>
);

export const FlatShow = (props) => (
    <Show title={<FlatTitle />} {...props}>
        <SimpleShowLayout>
            <DateField source="enter_date" label="Einzugsdatum" />
            <TextField source="street" label="Strasse" />
            <TextField source="zip" label="PLZ" />
            <TextField source="city" label="Ort" />
            <TextField source="country" label="Land" />
            <TextField source="contact_email" type="email" label="Kontakt Email"/>
        </SimpleShowLayout>
    </Show>
);
