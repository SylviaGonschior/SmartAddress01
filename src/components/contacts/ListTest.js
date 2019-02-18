import React, {Component} from 'react';
import {Title, Container, Header, Left, Body, Right, Button, Icon, Content} from 'native-base';
import List from './List';
import AddContactButton from "./AddContactButton";



export default class ContactsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [
                {id: 1, name: "Sylvia"},
                {id: 2, name: "Tom"}
            ]
        }
    }

    getContactsArray =() => {

        let contactList = this.state.contacts.map((contact) => {

            return(
                <Content>{contact.name}</Content>
            );
        });

        return(
            <Content>{contactList}</Content>
        );
    };


    addContact = (title) => {

        let contacts = this.state.contacts;
        let maxId = 0;
        for(let contact of contacts){
            if (contact.id > maxId){
                maxId = contact.id;
            }
        }
        contacts.unshift({id: (maxId+1), name: title});
        this.setState({
            contacts: contacts
        })
    }

    render() {
        const title = {text: 'Kontakte'};
        let getContacts = this.getContactsArray();


        return <Container style={{flex: 1}}>
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

                <List/>
                {getContacts}

                <AddContactButton onAdd = {this.addContact}/>

            </Content>

        </Container>;
    }

}
