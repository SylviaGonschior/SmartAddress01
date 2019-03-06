import React, {Component} from 'react';
import {Title, Container, Header, Left, Body, Right, Button, Icon, Content} from 'native-base';
import List from './List';
import {ActivityIndicator, StyleSheet, View} from 'react-native';


class ContactsScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            contacts: [],
            error: null

        }
    }

    componentDidMount() {
        fetch('http://192.168.2.118:8080/api/contacts')
            .then((response) => response.json())
            .then((contacts) => {
                this.setState({
                    isLoading: false,
                    contacts: contacts
                })

            })

            .catch((error) => {
                this.setState({
                    isLoading: false,
                    error: error
                })
            });
    }


    onClickContactItem = (clickedContactId) => {
        let myContact = this.state.contacts.find(contactId => contactId.contactId === clickedContactId);

        const {navigate} = this.props.navigation;
        navigate('Details', {
            contact: myContact
        });
    }

    render() {
        console.log(this.state);
        const title = {text: 'Kontakte'};

        // console.log('nav props: ', this.props.navigation);
        if (this.state.isLoading) {

            return (
                <View style={styles.container}>
                    <ActivityIndicator/>
                </View>
            )
        } else {

            return (
                <Container style={{flex: 1}}>
                    <Header>
                        <Left>
                            <Button
                                transparent
                                onPress={() => this.props.navigation.goBack()}
                            >
                                <Icon name='arrow-back'/>
                            </Button>
                        </Left>
                        <Body>
                        <Title>{title.text}</Title>
                        </Body>
                        <Right/>
                    </Header>
                    <Content>

                        <List
                            onClick={this.onClickContactItem}
                            contacts={this.state.contacts}
                        />

                    </Content>

                </Container>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    item: {
        flex: 1,
        alignSelf: 'stretch',
        margin: 10,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#eee'
    }
});

export default ContactsScreen;