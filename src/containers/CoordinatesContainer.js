import React, {Component} from 'react';
import {getCoordinates} from "../actions/index";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


class CoordinatesContainer extends Component {
    static propTypes = {
        Layout: PropTypes.func,
        getCoordinates: PropTypes.func
    };

    componentDidMount() {
        const {
            getCoordinates
        } = this.props;

        getCoordinates();
    }

    render() {
        const {
            Layout,
            latitude,
            longitude,
            latitudeDelta,
            longitudeDelta
        } = this.props;

        return (

            <Layout
                latitude={latitude}
                longitude={longitude}
                latitudeDelta={latitudeDelta}
                longitudeDelta={longitudeDelta}
            />

        );
    }
}


const mapStateToProps = state => {
    console.log(state);
    return {
        latitude: state.location.coordinates.latitude,
        longitude: state.location.coordinates.longitude,
        latitudeDelta: state.location.coordinates.latitudeDelta,
        longitudeDelta: state.location.coordinates.longitudeDelta
    }


};

const mapDispatchToProps = {
    getCoordinates: getCoordinates
};


export default connect(mapStateToProps, mapDispatchToProps)(CoordinatesContainer)
