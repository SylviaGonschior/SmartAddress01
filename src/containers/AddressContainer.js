import React, {Component} from 'react';
import { getAddress} from "../actions/index";
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

    render() {
        const {
            Layout,
            street,
            number,
            zipCode,
            city
        } = this.props;

        return (

            <Layout
                street={street}
                number={number}
                zipCode={zipCode}
                city={city}
            />

        );
    }
}


const mapStateToProps = state => {

    return{
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
