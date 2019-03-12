import React, {Component} from 'react';
import {StyleSheet, View} from "react-native";
import MapView from 'react-native-maps';


class GoogleMapView extends Component {

    render() {


        return (
            <View
                style={styles.container}>
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: 49.694671,
                        longitude: 8.574482,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                    }}>
                    <MapView.Marker title="Bensheim"
                                    coordinate={{
                                        latitude: 49.694671,
                                        longitude: 8.574482
                                    }}
                    />
                </MapView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    }
});


export default GoogleMapView;