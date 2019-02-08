import React, {Component} from 'react';
import {StyleSheet, TextInput, Text, FlatList, KeyboardAvoidingView} from 'react-native';
import {Container, Content } from "native-base";


export default class AddContact extends Component {
    state = {items: []};

    _addItem(text) {
        this.setState({
            items: [...this.state.items, {text, date: Date.now()}]
        });
        this.textInput.clear();
    }

    render() {


        const addContacts = {text: 'neue Kontakte hinzufügen:'};
        let content = <Text>Es sind noch keine Kontakte vorhanden</Text>;

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
            <Container>

                <Content contentContainerStyle={styles.content}>

                    <Text style={styles.title}>{addContacts.text}</Text>

                    {content}
                    <KeyboardAvoidingView behavior="padding">
                        <TextInput
                            style={styles.input}
                            ref={input => (this.textInput = input)}
                            placeholder="Kontakt hinzufügen"
                            returnKeyType="done"
                            onSubmitEditing={event => this._addItem(event.nativeEvent.text)}/>

                    </KeyboardAvoidingView>

                </Content>
            </Container>

        );
    }

}

const styles = StyleSheet.create({
    title: {
        padding: 50,
        margin: 15
    },
    list: {
        marginTop: 24
    },
    input: {
        height: 40
    },
    content: {
        padding: 20,
        margin: 15,
        justifyContent: 'space-between'
    }

});