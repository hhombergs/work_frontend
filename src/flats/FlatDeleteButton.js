/*
* @Author: hhombergs
* @Date:   2017-08-30
* @Last Modified by:   hhombergs
* @Last Modified time: 2017-08-30
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { DELETE, showNotification as showNotificationAction } from 'admin-on-rest';
import FlatButton from 'material-ui/FlatButton';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import { push as pushAction } from 'react-router-redux';
import restClient from '../restClient';

class FlatDeleteButton extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const { push, record, showNotification } = this.props;
        restClient(DELETE, 'flats', { id: record.id, data: record })
            .then(() => {
                showNotification('Wohnung gelöscht');
                push('/flats');
            })
            .catch((e) => {
                console.error(e);
                showNotification('Fehler: Wohnung nicht gelöscht', 'warning')
            });
    }

    render() {
        return <FlatButton secondary label="Löschen" onClick={this.handleClick} icon={<ActionDelete />} />;
    }
}

FlatDeleteButton.propTypes = {
    push: PropTypes.func,
    record: PropTypes.object,
    showNotification: PropTypes.func,
};

export default connect(null, {
    showNotification: showNotificationAction,
    push: pushAction,
})(FlatDeleteButton);