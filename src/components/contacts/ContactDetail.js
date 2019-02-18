import React, {Component} from 'react';
import {Container, Content, Text, Thumbnail, Grid, Col, Row} from 'native-base';
import {StyleSheet} from 'react-native';

const contactKnut =
{
    "contactId": "1",
    "phone": "+495164123456",
    "first": "Knut",
    "last": "Larson",
    "street": "Bahnhofstrasse",
    "number": "5",
    "zipCode": "64295",
    "city": "Darmstadt",
    "image": "../../pics/photoBG.png"

};


class ContactDetail extends Component {
    render() {


        return (
            <Container style={styles.container}>
                <Content style={styles.text}>
                    <Grid style={styles.grid}>
                    <Col style={styles.imageCol}>

                        <Thumbnail large style={styles.image} source={require('../../pics/photoBG.png')}/>

                    </Col>
                        <Col>

                    <Text style={styles.title}> Name: </Text>


                    <Text style={styles.field}> {contactKnut.first} {contactKnut.last} </Text>


                    <Text style={styles.title}> Adresse: </Text>


                    <Text style={styles.field}> {contactKnut.street} {contactKnut.number}</Text>

                    <Text style={styles.field} > {contactKnut.zipCode} {contactKnut.city}</Text>

                    <Text style={styles.title}> Telefonnummer: </Text>

                    <Text style={styles.field} > {contactKnut.phone}</Text>

                            </Col>
                    </Grid>
                    <Text style={{backgroundColor: 'blue', width: 400, height: 400}}> Google Maps View</Text>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        color: '#6C6C6C',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'stretch'
    },
    text: {
        flex:1,
        fontSize: 24,
        color: '#4B4B4B'
    },
    title: {

        fontSize: 24,
        fontWeight: 'bold',
        color: '#4B4B4B'
    },
    field:{

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