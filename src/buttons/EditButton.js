import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import shouldUpdate from 'recompose/shouldUpdate';
import compose from 'recompose/compose';
import FlatButton from 'material-ui/FlatButton';
import ContentCreate from 'material-ui/svg-icons/content/create';
import translate from 'admin-on-rest';
import linkToRecordToken from './LinkToRestToken';

const EditButton = ({ basePath = '', label = 'aor.action.edit', record = {}}) => <FlatButton
    primary
    label={label && translate(label)}
    icon={<ContentCreate />}
    containerElement={<Link to={linkToRecordToken(basePath, record.id, record.token)} />}
    style={{ overflow: 'inherit' }}
/>;

EditButton.propTypes = {
    basePath: PropTypes.string,
    label: PropTypes.string,
    record: PropTypes.object,
};

EditButton.defaultProps = {
    style: { padding: 0 },
};

export default EditButton;
