/*
* @Author: hhombergs
* @Date:   2017-08-31
* @Last Modified by:   hhombergs
* @Last Modified time: 2017-08-31
*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import { push as pushAction } from 'react-router-redux';
import RaisedButton from 'material-ui/RaisedButton';
import ActionCheck from 'material-ui/svg-icons/action/check-circle';
import AlertError from 'material-ui/svg-icons/alert/error-outline';
import compose from 'recompose/compose';
import inflection from 'inflection';
import { DELETE, showNotification as showNotificationAction, ViewTitle, Title, ListButton, translate} from 'admin-on-rest';
import restClient from '../restClient';

const styles = {
    actions: { zIndex: 2, display: 'inline-block', float: 'right' },
    toolbar: { clear: 'both' },
    button: { margin: '10px 24px', position: 'relative' },
};

class FlatDelete extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.goBack = this.goBack.bind(this);
    }

    getBasePath() {
        const { location } = this.props;
        return location.pathname.split('/').slice(0, -2).join('/');
    }

    handleSubmit(event) {
        //event.preventDefault();
        const { push, data, showNotification } = this.props;
        restClient(DELETE, 'flats', { id: data.id, data: data })
            .then(() => {
                showNotification('Wohnung gelöscht');
                push('/flats');
            })
            .catch((e) => {
                console.error(e);
                showNotification('Fehler: Wohnung nicht gelöscht', 'warning')
            });
    }

    goBack() {
        this.props.history.goBack();
    }

    render() {
        const { title, id, data, isLoading, resource, translate } = this.props;
        const basePath = this.getBasePath();

        const resourceName = translate(`resources.${resource}.name`, {
            smart_count: 1,
            _: 'Wohnung',
        });

        const idd = data.street + ', ' + data.zip + ', ' + data.city + ', ' + data.country;
        const defaultTitle = translate('aor.page.delete', {
            name: `${resourceName}`,
            idd,
            data,
        });
        const sure = translate('aor.message.are_you_sure');
        const titleElement = data ? <Title title={title} record={data} defaultTitle={defaultTitle} /> : '';

        return (
            <div>
                <Card style={{ opacity: isLoading ? .8 : 1 }}>
                    <CardActions style={styles.actions}>
                        <ListButton basePath={basePath} />
                    </CardActions>
                    <ViewTitle title={titleElement} />
                    <form onSubmit={this.handleSubmit}>
                        <CardText>{sure}</CardText>
                        <Toolbar style={styles.toolbar}>
                            <ToolbarGroup>
                                <RaisedButton
                                    type="submit"
                                    label={translate('aor.action.delete')}
                                    icon={<ActionCheck />}
                                    primary
                                    style={styles.button}
                                />
                                <RaisedButton
                                    label={translate('aor.action.cancel')}
                                    icon={<AlertError />}
                                    onClick={this.goBack}
                                    style={styles.button}
                                />
                            </ToolbarGroup>
                        </Toolbar>
                    </form>
                </Card>
            </div>
        );
    }
}

FlatDelete.propTypes = {
    title: PropTypes.any,
    id: PropTypes.string.isRequired,
    resource: PropTypes.string.isRequired,
    location: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    data: PropTypes.object,
    isLoading: PropTypes.bool.isRequired,
    translate: PropTypes.func.isRequired,
    showNotification: PropTypes.func,
    push: PropTypes.func,
};

function mapStateToProps(state, props) {
    return {
        id: decodeURIComponent(props.match.params.id),
        data: state.admin[props.resource].data[decodeURIComponent(props.match.params.id)],
        isLoading: state.admin.loading > 0,
    };
}

const enhance = compose(
    connect(
        mapStateToProps,
        {showNotification: showNotificationAction, push: pushAction}
    ),
    translate,
);

export default enhance(FlatDelete);
//export default FlatDelete;
