import React, {Component} from 'react';

import {Title, Container, Header, Left, Body, Right, Button, Icon} from 'native-base';

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
            </Container>

        )
    }

}

export default HomeScreen;