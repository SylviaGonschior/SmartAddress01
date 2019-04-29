import React, {Component} from 'react';
import {Text} from "native-base";

import {View} from "react-native";


export default class AddressView extends Component {


    render() {
        const {
            street,
            number,
            zipCode,
            city

        } = this.props;


        return (
            <View>
                <Text>Dein aktueller Standort ist:</Text>
                <Text/>
                <Text>{street} {number}</Text>
                <Text>{zipCode} {city}</Text>
                <Text/>
            </View>

        )
    }

}



