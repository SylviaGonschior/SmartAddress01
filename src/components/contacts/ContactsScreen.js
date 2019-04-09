import React, {Component} from 'react';
import {Title, Container, Header, Left, Body, Right, Button, Icon, Content} from 'native-base';
import {ActivityIndicator, StyleSheet, View, RefreshControl, ScrollView} from 'react-native';
import PropTypes from "prop-types";
import ContactListView from "./ContactListView";


class ContactsScreen extends Component {

    static propTypes = {
        contacts: PropTypes.array.isRequired,
        refreshData: PropTypes.func.isRequired,
        refreshing: PropTypes.bool.isRequired,
        navigation: PropTypes.object
    };

    onClickContactItem = (clickedContactId) => {
        const {
            contacts,
            navigation
        } = this.props;

        let myContact = contacts.find(contact => contact.contactId === clickedContactId);

        navigation.navigate('Details', {
            contact: myContact
        })

    }

    render() {

        const title = {text: 'Kontakte'};

        const {
            refreshing,
            refreshData,
            navigation
        } = this.props;

        // console.log('nav props: ', this.props.navigation);

            return (
                <Container style={{flex: 1}}>
                    <Header>
                        <Left>
                            <Button
                                transparent
                                onPress={() => navigation.goBack()}
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
                                refreshing={refreshing}
                                onRefresh={() => refreshData()}
                                colors={['#E20074']}
                            />
                        }
                    >
                        <ContactListView
                            contacts={this.props.contacts}
                            onClick={this.onClickContactItem}
                        />
                    </ScrollView>
                </Container>
            );
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