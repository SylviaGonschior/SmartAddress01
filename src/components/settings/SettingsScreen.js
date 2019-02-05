import React, {Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class SettingsScreen extends Component {
    render() {

        return (
            <View>
                <Text style={styles.settings}>
                    settings

                </Text>


            </View>
        )
    }

}

const styles = StyleSheet.create({
    settings: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});