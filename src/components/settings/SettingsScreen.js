import React, {Component} from 'react';

import {Body, Button, Container, Header, Icon, Left, Right, Title} from "native-base";

export default class SettingsScreen extends Component {
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
                    <Title>Settings</Title>
                    </Body>
                    <Right />
                </Header>
            </Container>
        )
    }

}

