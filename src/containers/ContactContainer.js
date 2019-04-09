import React, {Component} from 'react';
import {fetchContacts} from "../actions/contactAction";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


class ContactContainer extends Component {
    static propTypes = {
        Layout: PropTypes.func,
        fetchContacts: PropTypes.func,
        contacts: PropTypes.array,
        refreshing: PropTypes.bool,
    };

    componentDidMount() {
        this._refreshData();
    }


    _refreshData = () => {
        const {
            fetchContacts
        } = this.props;

        return fetchContacts();
    };


    getPassThroughProps = (props, propTypeKeys) => {
        let obj = {};
        let propsKeys = Object.keys(props);

        propsKeys.forEach((propKey) => {
            let match = false;
            propTypeKeys.forEach((propTypeKey) => {
                if (propKey === propTypeKey) {
                    match = true;
                    return;
                }
            });
            if (!match) {
                obj[propKey] = props[propKey];
            }
        });

        return obj;
    };

    render() {
        const {
            Layout,
            error,
            loading,
            contacts,
            refreshing
        } = this.props;

        const passThroughProps = this.getPassThroughProps(this.props, Object.keys(ContactContainer.propTypes));


        return (

            <Layout
                {...passThroughProps}
                error={error}
                loading={loading}
                contacts={contacts}
                refreshing={refreshing}
                refreshData={this._refreshData}
            />

        );
    }
}


const mapStateToProps = state => {

    return {
        contacts: state.contact.contacts,
        refreshing: state.contact.loading || false
    }

};

const mapDispatchToProps = {
    fetchContacts: fetchContacts
};


export default connect(mapStateToProps, mapDispatchToProps)(ContactContainer)
