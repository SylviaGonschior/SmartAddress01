import React, {Component} from 'react';
import {Container, Content, Card, CardItem, Text, Thumbnail, Grid, Col, Row} from 'native-base';
import {StyleSheet} from 'react-native';


class ContactDetail extends Component {
    render() {

        const firstName = {text: 'Pia'};
        const lastName = {text: 'Schneider'};
        const street = {text: 'Bahnhofstrasse'};
        const number = {text: 15};
        const plz = {text: 64625};
        const city = {text: 'Bensheim'};
        const tel = {text: '+491714729105'};


        return (
            <Container>

                <Content>
                    <Card>
                        <CardItem header>

                            <Text>
                                {firstName.text} {lastName.text}
                            </Text>
                        </CardItem>
                        <CardItem bordered>
                            <Grid style={styles.grid}>
                                <Col style={styles.imageCol}>
                                    <Thumbnail large style={styles.image} source={require('../../pics/photoSG.png')}/>
                                </Col>
                                <Col>
                                    <Row>
                                        <Text style={styles.address}>
                                            {street.text} {number.text}
                                        </Text>
                                    </Row>
                                    <Row>
                                        <Text style={styles.address}>
                                            {plz.text} {city.text}
                                        </Text>
                                    </Row>
                                    <Row>
                                        <Text style={styles.tel}>
                                            {tel.text}
                                        </Text>
                                    </Row>

                                </Col>
                            </Grid>

                        </CardItem>

                    </Card>
                </Content>
            </Container>

        );
    }
}

const styles = StyleSheet.create({
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

    },
    address: {
        fontSize: 20
    },

    tel: {
        fontSize: 14
    }

});

export default ContactDetail;