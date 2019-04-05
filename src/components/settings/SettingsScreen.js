import React, {Component} from 'react';
import {Body, Button, Container, Header, Icon, Left, Right, Title, Content} from "native-base";

export default class SettingsScreen extends Component {
    render() {

        return (
            <Container>
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
                    <Title>Settings</Title>
                    </Body>
                    <Right/>
                </Header>
                <Content>


                </Content>

            </Container>
        )
    }

}

