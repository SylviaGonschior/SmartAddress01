import React, {Component} from 'react';
import {Container, Content, Card, CardItem, Grid, Col, Text, Row, Thumbnail} from 'native-base';
import {StyleSheet, View} from "react-native";
import PropTypes from 'prop-types';

class List extends Component {

    static propTypes = {
        onClick: PropTypes.func,
        contacts: PropTypes.array.isRequired
    };

    constructor(props) {
        super(props);
    }

    _onClickCardItem = (id) => {
        const {
            onClick
        } = this.props;

        onClick(id);


    }


    getList = () => {
        const listItems = this.props.contacts.map((contact, i) => {
            return (
                <Card key={i}>
                    <CardItem button onPress={() => this._onClickCardItem(contact.contactId)}>
                        <Grid style={styles.grid}>
                            <Col style={styles.imageCol}>
                                <Thumbnail large style={styles.image} source={{uri: contact.image}}/>
                            </Col>
                            <Col>
                                <Row>
                                    <Text style={styles.name}> {contact.first} {contact.last}</Text>
                                </Row>
                                <Row>
                                    <Text style={styles.address}> {contact.addresses[0].street} {contact.addresses[0].number}</Text>
                                </Row>
                                <Row>
                                    <Text style={styles.address}> {contact.addresses[0].zipCode} {contact.addresses[0].city}</Text>
                                </Row>
                                <Row>
                                    <Text style={styles.tel}> {contact.phone} </Text>
                                </Row>
                            </Col>
                        </Grid>
                    </CardItem>
                </Card>
            );
        });
        console.log('props:', this.props);
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

export default List;