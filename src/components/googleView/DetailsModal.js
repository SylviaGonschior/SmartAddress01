import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import AddressView from '../address/AddressView';
import {Button} from "react-native-elements";


class DetailsModal extends Component {

    getCurrentLocationData = () => {

        const {
            onSaveAddress,
            street,
            number,
            zipCode,
            city
        } = this.props;

        onSaveAddress(street, number, zipCode, city);
    }


    render() {
        const {
            onCloseModal,
            isModalVisible,
            street,
            number,
            zipCode,
            city
        } = this.props;


        return (

            <View>

                <Modal
                    isVisible={isModalVisible}
                    animationInTiming={2000}
                    animationOutTiming={2000}
                    backdropTransitionInTiming={2000}
                    backdropTransitionOutTiming={2000}
                    onBackdropPress={onCloseModal}
                >
                  <View style={{marginTop: 200}}>
                    <AddressView
                        street={street}
                        number={number}
                        zipCode={zipCode}
                        city={city}/>
                  </View>

                    <Button
                        title='Ja, diese Adresse bitte zu meinem Kontakt hinzufügen'
                        onPress={this.getCurrentLocationData}
                        buttonStyle={styles.buttonSubmit}
                        titleStyle={styles.buttonText}
                    />
                    <Button
                        title='Och, nö lass mal'
                        onPress={onCloseModal}
                        buttonStyle={styles.buttonCancel}
                        titleStyle={styles.buttonText}
                    />

                </Modal>

            </View>

        );
    }
}


const styles = StyleSheet.create({

    buttonSubmit: {
        backgroundColor: '#E20074',
        padding: 10,
        margin: 5,
        opacity: 0.7
    },
    buttonCancel: {
        backgroundColor: '#7C7C7C',
        padding: 10,
        margin: 5,
        opacity: 0.7
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff'
    }

});

export default DetailsModal;