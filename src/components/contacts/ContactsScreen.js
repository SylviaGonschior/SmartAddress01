import React, {Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class ContactsScreen extends Component {
    render() {

        return (
            <View>
                <Text style={styles.contactsBody}>
                    contacts

                </Text>


            </View>
        )
    }

}

const styles = StyleSheet.create({
    contactsBody: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});