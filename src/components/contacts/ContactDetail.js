import React, {Component} from 'react';
import {
    Container,
    Content,
    Text,
    Icon,
    Header,
    Left,
    Body,
    Title,
    Right,
    Button
} from 'native-base';
import {StyleSheet, TouchableOpacity} from 'react-native';
import GoogleMapView from '../googleView/GoogleMapView';
import CoordinatesContainer from '../../containers/CoordinatesContainer';
import ContactCard from './ContactCard';
import DetailsModal from "../googleView/DetailsModal";
import AddressContainer from './../../containers/AddressContainer';
import Contact from './../../containers/Contact';
import PropTypes from "prop-types";

class ContactDetail extends Component {
    static propTypes = {
        first: PropTypes.string,
        last: PropTypes.string,
        phone: PropTypes.string,
        image: PropTypes.string,
        street: PropTypes.string,
        number: PropTypes.string,
        zipCode: PropTypes.string,
        city: PropTypes.string,
        contactId: PropTypes.string
    }

    constructor() {
        super();
        this.state = {
            getCurrentLocationButtonClicked: false,
            isModalVisible: false

        }
    }

    getPosition = () => {
        this.setState({
            getCurrentLocationButtonClicked: true
        })
    }

    onSaveAddress = (street, number, zipCode, city) => {
        const {
            addAddressToContact,
            navigation
        } = this.props;
        this.setState({isModalVisible: false});
        navigation.navigate('Contacts');
        addAddressToContact(street, number, zipCode, city);

    }


    render() {
        //console.log('props: ', this.props.navigation.getParam('contact'));
        const {
            first,
            last,
            phone,
            image,
            street,
            number,
            zipCode,
            city,
            contactId
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
                    <Contact
                        Layout={ContactCard}
                        first={first}
                        last={last}
                        phone={phone}
                        image={image}
                        contactId={contactId}
                        street={street}
                        number={number}
                        zipCode={zipCode}
                        city={city}
                        addAddressToContact={this.onSaveAddress}

                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.getPosition}>
                        <Text style={styles.buttonText}>Standort anzeigen</Text>
                    </TouchableOpacity>
                </Content>

                {(this.state.getCurrentLocationButtonClicked === true ? (
                    <CoordinatesContainer
                        Layout={GoogleMapView}
                        onMarkerClicked={() => this.setState({
                            isModalVisible: true,
                            getCurrentLocationButtonClicked: false
                        })}
                    />) : null)}

                <AddressContainer
                    Layout={DetailsModal}
                    isModalVisible={this.state.isModalVisible}
                    onCloseModal={() => this.setState({isModalVisible: false})}
                    onSaveAddress={this.onSaveAddress}
                />

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
        padding: 3,
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
    },
    button: {
        backgroundColor: '#E20074',
        marginLeft: 90,
        marginRight: 20,
        marginTop: 30,
        padding: 10,
        paddingRight: 10
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        alignItems: 'center',
        color: '#fff'
    }
});

export default ContactDetail;