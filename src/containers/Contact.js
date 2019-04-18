import React, {Component} from 'react';
import {addAddressToContact} from "../actions/contactAction";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


class Contact extends Component {
    static propTypes = {
        Layout: PropTypes.func,
        addAddressToContact: PropTypes.func,
        contacts: PropTypes.array,
        refreshing: PropTypes.bool
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



    addAddressToContact = (street, number, zipCode, city) => {
        // kontakt aus der navigation auslesen, welcher in den Details angezeigt wird. Diesem Kontakt sollen die neuen Adressinformation zugewiesen werden
        console.log('street', street);
        const contactToChange = this.props.navigation.getParam('contact')
        // Aufruf der action mit Kontakt contactToChange zu dem die Adressinformation street, number, zipCode, city hinzugefügt werden sollen
        const {
            addAddressToContact
        } = this.props;

        addAddressToContact(contactToChange,{street, number, zipCode, city});

    };


    render() {

        const {
            Layout,
            contacts,
            refreshing
        } = this.props;


        const passThroughProps = this.getPassThroughProps(this.props, Object.keys(Contact.propTypes));

        return (

            <Layout
                {...passThroughProps}
                contacts={contacts}
                refreshing={refreshing}
                addAddressToContact={this.addAddressToContact}
            />
        );
    }
}

const mapStateToProps = state => {
    console.log('state Contact', state);
    return {
        contacts: state.contact.contacts,
        refreshing: state.contact.loading || false


    }
};
// weise die action Funktion addAddressToContact einer Funktion addAddressToContact in den props des containers zu, somit kann die action im container mit this.props.addAddressToContact verwendet werden
const mapDispatchToProps = {
    addAddressToContact: addAddressToContact
};


export default connect(mapStateToProps, mapDispatchToProps)(Contact)
