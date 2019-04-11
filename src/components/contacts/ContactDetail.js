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

class ContactDetail extends Component {


    constructor() {
        super();
        this.state = {
            getCurrentLocationButtonClicked: false
        }
    }

    getPosition = () => {
        this.setState({
            getCurrentLocationButtonClicked: true
        })
    }

    render() {
        //console.log('props: ', this.props.navigation.getParam('contact'));

        const {
            first,
            last,
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
                 <ContactCard
                     first={first}
                     last={last}
                     phone={phone}
                     image={image}

                 />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.getPosition}>
                        <Text>open map</Text>
                    </TouchableOpacity>
                </Content>

                {(this.state.getCurrentLocationButtonClicked === true ? (
                    <CoordinatesContainer Layout={GoogleMapView}/>) : null)}

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
    },
    button: {
        fontSize: 36,
        fontWeight: 'bold',
        backgroundColor: '#E20074',
        alignItems: 'center',
        color: '#fff'
    }
});

export default ContactDetail;