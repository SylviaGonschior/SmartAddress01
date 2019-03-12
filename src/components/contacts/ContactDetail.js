import React, {Component} from 'react';
import {Container, Content, Text, Thumbnail, Grid, Col, Icon, Header, Left, Body, Title, Right, Button} from 'native-base';
import {StyleSheet } from 'react-native';
import GoogleMapView from '../googleView/GoogleMapView';


class ContactDetail extends Component {

    render() {
        console.log('props: ', this.props.navigation.getParam('contact'));
        const {
            first,
            last,
            addresses,
            phone,
            image
        } = this.props.navigation.getParam('contact');

        const title = {text: 'Details'};

        return (

                <Container style={styles.container}>
                    <Content style={styles.text}>
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
                            <Title>{title.text}</Title>
                            </Body>
                            <Right/>
                        </Header>
                        <Grid style={styles.grid}>
                            <Col style={styles.imageCol}>
                                <Thumbnail large style={styles.image} source={{uri: image}}/>
                            </Col>
                            <Col>
                                <Text style={styles.title}> Name: </Text>
                                <Text style={styles.field}> {first} {last} </Text>
                                <Text style={styles.title}> Adresse: </Text>
                                <Text style={styles.field}> {addresses[0].street} {addresses[0].number}</Text>
                                <Text style={styles.field}> {addresses[0].zipCode} {addresses[0].city}</Text>
                                <Text style={styles.title}> Telefonnummer: </Text>
                                <Text style={styles.field}> {phone}</Text>
                            </Col>
                        </Grid>
                    </Content>

                    <GoogleMapView/>

                </Container>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: '#6C6C6C',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'stretch'
    },
    text: {
        flex: 1,
        fontSize: 24,
        color: '#4B4B4B'
    },
    title: {

        fontSize: 24,
        fontWeight: 'bold',
        color: '#4B4B4B'
    },
    field: {

        borderWidth: 1,
        borderRadius: 8
    },
    image: {
        width: 70,
        height: 70,
        marginRight: 5
    },
    grid: {
        marginTop: 10,
        marginBottom: 10
    },
    imageCol: {
        width: 80
    }
});

export default ContactDetail;