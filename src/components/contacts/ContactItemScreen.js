import React, {Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class ContactItemScreen extends Component {
    render() {

        const item = { text: 'hier wird ein neuer Kontakt hinzugefügt'};
        return (

                <View style={styles.item_container}>
                    <Text>{item.text}</Text>

                </View>



        )
    }

}

const styles = StyleSheet.create({
    item_container: {
        flex: 1
    }
});