import React, {Component} from 'react';
import {Title, Container, Header, Left, Body, Right, Button, Icon} from 'native-base';
import Layout from './Layout';


class HomeScreen extends Component {
    render() {

        return (

            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                    <Title>Home</Title>
                    </Body>
                    <Right />
                </Header>
<Layout title="SmartAdress App" content="Hier fügen Sie ihrem Kontakt ganz komfortabel eine Adresse hinzu"/>

            </Container>

        )
    }

}

export default HomeScreen;