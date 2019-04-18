import React, {Component} from 'react';
import { getAddress} from "../actions/locationAction";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


class AddressContainer extends Component {
    static propTypes = {
        Layout: PropTypes.func,
        getAddress: PropTypes.func
    };

    componentDidMount() {
        const {
            getAddress
        } = this.props;

        getAddress();
    }



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
            street,
            number,
            zipCode,
            city
        } = this.props;

        const passThroughProps = this.getPassThroughProps(this.props, Object.keys(AddressContainer.propTypes));

        return (

            <Layout
                {...passThroughProps}
                street={street}
                number={number}
                zipCode={zipCode}
                city={city}
            />

        );
    }
}


const mapStateToProps = state => {

    return {
        street: state.location.address.street,
        number: state.location.address.number,
        zipCode: state.location.address.zipCode,
        city: state.location.address.city
    }


};

const mapDispatchToProps = {
    getAddress: getAddress
};



export default connect(mapStateToProps,mapDispatchToProps)(AddressContainer)
