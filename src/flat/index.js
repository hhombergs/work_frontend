import React from 'react';
import { CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import NavigationRefresh from 'material-ui/svg-icons/navigation/refresh';
import PropTypes from 'prop-types';
import { Datagrid, DateField, DateInput, DeleteButton, Edit, EditButton, EmailField, List, Show, ShowButton, SimpleForm, SimpleShowLayout, TextField, TextInput } from 'admin-on-rest';
import FullTitleField from './FullTitleField';

const cardActionStyle = {
    zIndex: 2,
    display: 'inline-block',
    float: 'right',
};

const FlatEditActions = ({ basePath, data, refresh }) => (
    <CardActions style={cardActionStyle}>
        <ShowButton basePath={basePath} record={data} />
        <DeleteButton basePath={basePath} record={data} />
        <FlatButton primary label="Refresh" onClick={refresh} icon={<NavigationRefresh />} />
    </CardActions>
);

FlatEditActions.propTypes = {
    basePath: PropTypes.string,
    data: PropTypes.object,
    refresh: PropTypes.function,
};

const FlatShowActions = ({ basePath, data, refresh }) => (
    <CardActions style={cardActionStyle}>
        <EditButton basePath={basePath} record={data} />
        <DeleteButton basePath={basePath} record={data} />
        <FlatButton primary label="Refresh" onClick={refresh} icon={<NavigationRefresh />} />
    </CardActions>
);

FlatShowActions.propTypes = {
    basePath: PropTypes.string,
    data: PropTypes.object,
    refresh: PropTypes.function,
};

const dateString = (v) => {
    if (isNaN(v)) return;
    const parsedDate = new Date(v);
    const adjustedDate = new Date(parsedDate.getTime() - (parsedDate.getTimezoneOffset() * 60000));
    return adjustedDate;
};

export const FlatList = props => (
    <List {...props} title="Wohnung" sort={{ field: 'enter_date', order: 'DESC' }} perPage={25} filter={{ id: sessionStorage.getItem('token') }}>
        <Datagrid>
            <DateField source="enter_date" options={{ day: '2-digit', month: '2-digit', year: 'numeric' }} label="Einzugsdatum" />
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
);

const FlatTitle = ({ record }) => {
    if (!record) {
        return null;
    }
    return <FullTitleField record={record} size={32} />;
};

FlatTitle.propTypes = {
    record: PropTypes.object,
};

export const FlatEdit = props => (
    <Edit actions={<FlatEditActions />} title={<FlatTitle />} {...props}>
        <SimpleForm redirect="show">
            <DateInput source="enter_date" label="Einzugsdatum" parse={dateString} />
            <TextInput source="street" label="Strasse" />
            <TextInput source="zip" label="PLZ" />
            <TextInput source="city" label="Ort" />
            <TextInput source="country" label="Land" />
            <TextInput source="contact_email" label="Kontakt Email" type="email" validation={{ email: true }} />
        </SimpleForm>
    </Edit>
);

export const FlatShow = props => (
    <Show actions={<FlatShowActions />} title={<FlatTitle />} {...props}>
        <SimpleShowLayout>
            <DateField source="enter_date" label="Einzugsdatum" />
            <TextField source="street" label="Strasse" />
            <TextField source="zip" label="PLZ" />
            <TextField source="city" label="Ort" />
            <TextField source="country" label="Land" />
            <TextField source="contact_email" type="email" label="Kontakt Email" />
        </SimpleShowLayout>
    </Show>
);
