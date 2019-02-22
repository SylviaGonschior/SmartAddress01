import React, {Component} from 'react';
import {Body, Button, Container, Header, Icon, Left, Right, Title, Content} from "native-base";
import datas from '../../mocks/contacts_data';
import ListViewPics from '../pictures/ListViewPics';

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
                <Content>

                    <ListViewPics
                    contacts={datas}
                    />
                </Content>

            </Container>
        )
    }

}

