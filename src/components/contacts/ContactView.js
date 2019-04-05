import React, {Component} from 'react';
import {Text} from "native-base";

import {View, StyleSheet} from "react-native";


export default class AddressView extends Component {


    render() {
        const {
            street,
            number,
            zipCode,
            city

        } = this.props;



        return (
            <View  styles={styles.container}>
                <Text>Dein aktueller Standort ist:</Text>
                <Text/>
                <Text>{street} {number}</Text>
                <Text>{zipCode} {city}</Text>
                <Text/>
            </View>

        )
    }

}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4B4B4B',
        padding: 100,
        height: 20,
        width: 20
    }

});


