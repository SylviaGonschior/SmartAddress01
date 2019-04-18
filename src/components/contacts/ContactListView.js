import React, {Component} from 'react';
import {Container, Content, Card, CardItem, Grid, Col, Text, Row, Thumbnail} from 'native-base';
import {StyleSheet, View} from "react-native";
import PropTypes from 'prop-types';

class ContactListView extends Component {

    static propTypes = {
        onClick: PropTypes.func,
        contacts: PropTypes.array,
        refreshControl: PropTypes.object
    };


    _onClickCardItem = (id) => {
        console.log('id', id);
        const {
            onClick
        } = this.props;
        onClick(id);
    };


    getList = () => {

        const {
            contacts
        } = this.props;


        const listItems = contacts.map((item, i) => {

            return (
                <Card key={i}>
                    <CardItem button onPress={() => this._onClickCardItem(item.contactId)}>
                        <Grid style={styles.grid}>
                            <Col style={styles.imageCol}>
                                <Thumbnail large style={styles.image} source={{uri: item.image}}/>
                            </Col>
                            <Col>
                                <Row>
                                    <Text style={styles.name}> {item.first} {item.last}</Text>
                                </Row>
                                <Row>
                                    <Text style={styles.tel}> Strasse: {item.street} {item.number}</Text>
                                </Row>
                                <Row>
                                    <Text style={styles.tel}> Ort: {item.zipCode} {item.city} </Text>
                                </Row>
                                <Row>
                                    <Text style={styles.tel}> {item.phone}</Text>
                                </Row>
                            </Col>
                        </Grid>
                    </CardItem>
                </Card>
            );
        });

        return (
            <View>
                {listItems}
            </View>);

    };


    render() {


        let list = this.getList();


        return (

            <Container>
                <Content>
                    {list}

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
    name: {
        fontWeight: 'bold',
        fontSize: 20
    },
    address: {
        fontSize: 16
    },
    tel: {
        fontSize: 14
    }
});

export default ContactListView;