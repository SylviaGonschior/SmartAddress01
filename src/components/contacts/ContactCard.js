import React, {Component} from 'react';
import {
    Text,
    Thumbnail,
    Grid,
    Col
} from 'native-base';
import {StyleSheet} from 'react-native';


class ContactCard extends Component {

    render() {

        const {
            contactId,
            first,
            last,
            phone,
            image,
            street,
            number,
            zipCode,
            city
        } = this.props;

        return (
                    <Grid style={styles.grid}>
                        <Col style={styles.imageCol}>
                            <Thumbnail large style={styles.image} source={{uri: image}}/>
                        </Col>
                        <Col>
                            <Text style={styles.title}> Name: </Text>
                            <Text style={styles.field}> {first} {last} </Text>
                            <Text />
                            <Text style={styles.title}> Adresse: </Text>
                            <Text style={styles.field1}> {street} {number} </Text>
                            <Text style={styles.field}>{zipCode} {city} </Text>
                            <Text />
                            <Text style={styles.title}> Telefonnummer: </Text>
                            <Text style={styles.field}> {phone}</Text>
                        </Col>
                    </Grid>
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
        fontSize: 18,
        fontWeight: 'bold',
        color: '#4B4B4B'
    },
    field: {
        borderWidth: 1,
        borderRadius: 8,
        padding: 5,
        marginLeft: 10
    },
    field1: {
        borderWidth: 1,
        borderRadius: 8,
        padding: 5,
        marginBottom: 5,
        marginLeft: 10
    },
    image: {
        width: 70,
        height: 70,
        marginRight: 5
    },
    grid: {
        marginTop: 10,
        marginBottom: 10,
        paddingRight: 20
    },
    imageCol: {
        width: 80
    }
});

export default ContactCard;