import React, {Component} from 'react';
import {Title, Container, Header, Left, Body, Right, Button, Icon} from 'native-base';
import List from './List';
import {ActivityIndicator, StyleSheet, View, RefreshControl, ScrollView} from 'react-native';


class ContactsScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            contacts: [],
            error: null,
            refreshing: false
        }
    }


    componentDidMount() {
        this.makeRemoteRequest();
    }

    makeRemoteRequest = () => {
        fetch('https://my-json-server.typicode.com/SylviaGonschior/SmartAddress01/contacts')
            .then((response) => response.json())
            .then((contacts) => {
                this.setState({
                    isLoading: false,
                    contacts: contacts,
                    refreshing: false
                })

            })

            .catch((error) => {
                this.setState({
                    isLoading: false,
                    error: error,
                    refreshing: false
                })
            });


    }

    _onRefresh = () => {
        this.setState({refreshing: true}, this.makeRemoteRequest);
    }

    onClickContactItem = (clickedContactId) => {
        let myContact = this.state.contacts.find(contactId => contactId.contactId === clickedContactId);

        const {navigate} = this.props.navigation;
        navigate('Details', {
            contact: myContact
        });
    }

    render() {

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

                        <ScrollView
                            contentContainerStyle={styles.contentContainer}
                            refreshControl={
                                <RefreshControl
                                    refreshing={this.state.refreshing}
                                    onRefresh={this._onRefresh}
                                />
                            }
                        >
                            <List
                                onClick={this.onClickContactItem}
                                contacts={this.state.contacts}
                            />

                        </ScrollView>


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
    },
    contentContainer: {
        flex: 1,
        paddingVertical: 20
    }

   });


export default ContactsScreen;