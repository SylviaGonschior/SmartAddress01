import React, {Component} from 'react';
import {StyleSheet, View, Button} from 'react-native';
import {createOpenLink} from 'react-native-open-maps';

const home = {
    latitude: 49.694671,
    longitude: 8.574482
};



const openHome = createOpenLink(home);


class AddressView extends Component {


    render() {

        return (
            <View>
                <Button
                    onPress={openHome}
                    title="Open the map"
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0

    }

});

export default AddressView;