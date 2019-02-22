import React, {Component} from 'react';
import {Container, Content, Text, Thumbnail, Grid, Col} from 'native-base';
import {StyleSheet, View} from 'react-native';


class ContactDetail extends Component {


    render() {
        console.log('props: ', this.props.navigation.getParam('contact'));
        const {
            first,
            last,
            street,
            number,
            zipCode,
            city,
            phone
        } = this.props.navigation.getParam('contact');

        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Container style={styles.container}>
                    <Content style={styles.text}>
                        <Grid style={styles.grid}>
                            <Col style={styles.imageCol}>
                                <Thumbnail large style={styles.image} source={require('../../pics/photoBG.png')}/>
                            </Col>
                            <Col>
                                <Text style={styles.title}> Name: </Text>
                                <Text style={styles.field}> {first} {last} </Text>
                                <Text style={styles.title}> Adresse: </Text>
                                <Text style={styles.field}> {street} {number}</Text>
                                <Text style={styles.field}> {zipCode} {city}</Text>
                                <Text style={styles.title}> Telefonnummer: </Text>
                                <Text style={styles.field}> {phone}</Text>
                            </Col>
                        </Grid>
                        <Text style={{backgroundColor: 'blue', width: 400, height: 400}}> Google Maps View</Text>
                    </Content>
                </Container>
            </View>
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