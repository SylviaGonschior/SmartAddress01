import React, {Component} from 'react';
import {StyleSheet, TextInput, FlatList} from 'react-native';
import {Container, Text, Button} from 'native-base';


export default class ContactsScreen extends Component {
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
            <Container style={styles.container}>
                <Text>
                    {title.text}
                </Text>
                <Button full dark
                >
                    <Text>Kontakt hinzufügen</Text>
                </Button>

                <TextInput
                    style={styles.input}
                    placeholder="Kontakt hinzufügen"
                    returnKeyType="done"
                    onSubmitEditing={event => this._addItem(event.nativeEvent.text)}/>

                {content}


            </Container>

        )
    }

}

const styles = StyleSheet.create({
    contactsBody: {
        fontSize: 20,
        justifyContent: 'center',
        flex: 1
    },
    list: {
        marginTop: 24
    },
    input: {
        height: 40
    },

});