import React, {Component} from 'react';
import {StyleSheet, Dimensions, View, Text} from 'react-native';
import MapView from 'react-native-maps';
import DetailsModal from "./DetailsModal";




class GoogleMapView extends Component {

    state = {
        isModalVisible: false,

    };

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
                    onPress={() => this.setState({isModalVisible: true})}
                >
                    <DetailsModal
                        isModalVisible={this.state.isModalVisible}
                        onCloseModal={()=>this.setState({isModalVisible: false})}
                    />

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