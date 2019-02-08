import React, {Component} from 'react';
import {Title, Container, Header, Left, Body, Right, Button, Icon, Content} from 'native-base';
import AddContact from './AddContact';
import ContactDetail from './ContactDetail';

export default class ContactsScreen extends Component {


    render() {
        const title = {text: 'Kontakte'};


        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='arrow-back'/>
                        </Button>
                    </Left>
                    <Body>
                    <Title>{title.text}</Title>
                    </Body>
                    <Right/>
                </Header>
                <Content>
                <ContactDetail />
                <AddContact />

                </Content>

            </Container>

        );
    }

}
