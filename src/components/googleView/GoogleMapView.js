import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import MapView from 'react-native-maps';


class GoogleMapView extends Component {

    state = {
        isModalVisible: false,

    };

    onMarkerClicked = () => {
        const {onMarkerClicked } = this.props;
        onMarkerClicked();
    }

    render() {
        console.log('render');

        const {
            latitude,
            longitude,
            latitudeDelta,
            longitudeDelta
        } = this.props;

        const region = {
            latitude,
            longitude,
            latitudeDelta,
            longitudeDelta
        }
        return (

            <MapView
                style={styles.container}
                showsUserLocation={true}
                region={region}
                zoomEnabled={true}
                loadingEnabled={true}
            >
                <MapView.Marker
                    coordinate={region}
                    pinColor='purple'
                    onPress={this.onMarkerClicked}
                >

                </MapView.Marker>
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

export default GoogleMapView;