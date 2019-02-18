import React, {Component} from 'react';
import {Container, Content, Card, CardItem, Grid, Col, Text, Row, Thumbnail} from 'native-base';
import {StyleSheet, View} from "react-native";
import datas from '../../mocks/contacts_data';

const image = '../../pics/photoBG.png';

class List extends Component {


    getList = () => {

        const listItems = datas.map((contact) => {
            return (
                <Card key={contact.contactId}>
                    <CardItem>
                        <Grid style={styles.grid}>

                                <Col style={styles.imageCol}>

                                    <Thumbnail large style={styles.image} source={require(image)}/>

                                </Col>

                            <Col>
                                <Row>
                                    <Text style={styles.name}> {contact.first} {contact.last}</Text>
                                </Row>
                                <Row>
                                    <Text style={styles.address}> {contact.street} {contact.number}</Text>
                                </Row>
                                <Row>
                                    <Text style={styles.address}> {contact.zipCode} {contact.city}</Text>
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