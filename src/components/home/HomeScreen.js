import React, {Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class HomeScreen extends Component {
    render() {

        return (
            <View>
                <Text style={styles.homeBody}>
                    Home sweet Home

                </Text>


            </View>
        )
    }

}

const styles = StyleSheet.create({
    homeBody: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});