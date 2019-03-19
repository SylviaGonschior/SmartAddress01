import React, { Component } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import Config from 'react-native-config';
import Geocoder from "react-native-geocoding";


let { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 49.5222171;
const LONGITUDE = 8.394294;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const key = Geocoder.setApiKey(Config.GOOGLE_API_KEY);

export default class GoogleMapView extends Component {
    constructor() {
        super();
        this.state = {
            region: {
                latitude: LATITUDE,
                longitude: LONGITUDE,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            }
        };

    }

    getAddressData () {
        key;
        Geocoder.getFromLatLng(this.state.region.latitude,this.state.region.longitude).then(
            response => {
                let address = response.results[0].formatted_address;
                console.log(address);

                alert(address);
            },
            error => {console.warn(error);})


    }
    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            position => {
                console.log(position);
                this.setState({
                    region: {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        latitudeDelta: LATITUDE_DELTA,
                        longitudeDelta: LONGITUDE_DELTA,
                    }
                });
            },
            (error) => console.log(error.message),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        );
        console.log('current position: ', this.state.region.latitude, this.state.region.longitude);
    }

    render() {
        return (
            <MapView
                style={ styles.container }
                showsUserLocation={ true }
                region={ this.state.region }
                onRegionChange={ region => this.setState({region}) }
                onRegionChangeComplete={ region => this.setState({region}) }
                zoomEnabled={true}
                loadingEnabled={true}
            >
                <MapView.Marker
                    coordinate={ this.state.region }
                    onPress={()=> {this.getAddressData()}}
                />
            </MapView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    }
});