import React, {Component} from 'react';
import {getCoordinates} from "../actions/locationAction";
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
            latitude,
            longitude,
            latitudeDelta,
            longitudeDelta
        } = this.props;

        const passThroughProps = this.getPassThroughProps(this.props, Object.keys(CoordinatesContainer.propTypes));
        return (

            <Layout
                {...passThroughProps}
                latitude={latitude}
                longitude={longitude}
                latitudeDelta={latitudeDelta}
                longitudeDelta={longitudeDelta}
            />

        );
    }
}


const mapStateToProps = state => {

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
