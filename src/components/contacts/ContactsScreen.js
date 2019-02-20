import React, {Component} from 'react';
import {Title, Container, Header, Left, Body, Right, Button, Icon, Content} from 'native-base';
import List from './List';
import datas from '../../mocks/contacts_data';

export default class ContactsScreen extends Component {

    onClickContactItem = (clickedContactId) => {
        let myContact = datas.find(contactId => contactId.contactId === clickedContactId);

        const {navigate} = this.props.navigation;
        navigate('Details', {
            contact: myContact
        });
    }

    render() {
        const title = {text: 'Kontakte'};


        return (
            <Container style={{flex: 1}}>
                <Header>
                    <Left>
                        <Button
                            transparent
                            onPress={() => goBack()}
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
                        contacts={datas}
                    />

                </Content>

            </Container>
        );
    }

}
