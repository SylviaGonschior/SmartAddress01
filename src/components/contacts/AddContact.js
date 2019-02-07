import React, {Component} from 'react';
import {StyleSheet, TextInput, Text, View, FlatList} from 'react-native';


export default class AddContact extends Component {
    state = {items: []};

    _addItem(text) {
        this.setState({
            items: [...this.state.items, {text, date: Date.now()}]
        });
    }

    render() {

        const title = {text: "Hier Kontakt hinzufügen:"};
        const noContacts = {text: 'Es sind keine Kontakte hinzugefügt'};

        let content = <Text>Keine Kontakte</Text>;
        if (this.state.items.length > 0) {
            content = (
                <FlatList
                    style={styles.list}
                    data={this.state.items}
                    renderItem={({item}) => <Text>{item.text}</Text>}
                    keyExtractor={item => item.date.toString()}/>
            );
        }


        return (
            <View style={styles.container}>

                <Text>
                    {title.text}
                </Text>


                <Text style={styles.contactsBody}>{this.state.item || noContacts.text}</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Kontakt hinzufügen"
                    returnKeyType="done"
                    onSubmitEditing={event => this._addItem(event.nativeEvent.text)}/>

                {content}
            </View>
        )
    }

}

const styles = StyleSheet.create({
    contactsBody: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    input: {
        height: 40
    }
});