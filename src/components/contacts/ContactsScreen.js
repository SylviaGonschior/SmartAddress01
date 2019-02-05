import React, {Component} from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, Button, Text } from 'native-base';

export default class ContactsScreen extends Component {
    render() {

        const title = { text: 'Contacts'};
        return (
            <Container>
                <Header style={styles.contactsHeader}>
                    <Text style={{fontSize: 20, margin: 10}}>
                        {title.text}
                    </Text>
                </Header>
            <Content>
                <Text style={styles.contactsBody}>
                   Und hier kann irgendetwas anderes stehen
                </Text>

                <Button full dark>
                    <Text>Kontakt hinzufügen</Text>
                </Button>

            </Content>
            </Container>
        )
    }

}

const styles = StyleSheet.create({
    contactsBody: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    contactsHeader: {
        backgroundColor: '#E20074'
    }
});