import React, {Component} from 'react';
import {Title, Container, Header, Left, Body, Right, Button, Icon, Content} from 'native-base';
import List from './List';



export default class ContactsScreen extends Component {


    render() {
        const title = {text: 'Kontakte'};


        return <Container style={{flex:1}}>
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

               <List />

            </Content>

        </Container>;
    }

}
