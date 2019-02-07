import React, {Component} from 'react';
import {StyleSheet, TextInput, FlatList, KeyboardAvoidingView} from 'react-native';
import {Container, Text, Button, Header} from 'native-base';


export default class ContactsScreen extends Component {
    state = {items: []};

    _addItem(text) {
        this.setState({
            items: [...this.state.items, {text, date: Date.now()}]
        });
        this.textInput.clear();
    }

    render() {
        const title = {text: 'Kontakte'};
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
                <Header style={styles.contactsHeader}>
                    <Text>
                        {title.text}
                    </Text>
                </Header>

                <Button full dark
                >
                    <Text>Kontakt hinzufügen</Text>
                </Button>
                {content}
                <KeyboardAvoidingView behavior="padding">
                    <TextInput
                        style={styles.input}
                        ref={input => (this.textInput = input)}
                        placeholder="Kontakt hinzufügen"
                        returnKeyType="done"
                        onSubmitEditing={event => this._addItem(event.nativeEvent.text)}/>

                </KeyboardAvoidingView>


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
    contactsHeader: {
        backgroundColor: '#E20074',
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    list: {
        marginTop: 24
    },
    input: {
        height: 40
    },

});