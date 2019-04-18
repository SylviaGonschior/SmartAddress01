import React, {Component} from 'react';
import { View, StyleSheet, Button} from 'react-native';
import Modal from 'react-native-modal';
import AddressView from '../address/AddressView';


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

            <View styles={styles.container}>

                <Modal
                    isVisible={isModalVisible}
                    animationInTiming={2000}
                    animationOutTiming={2000}
                    backdropTransitionInTiming={2000}
                    backdropTransitionOutTiming={2000}
                    onBackdropPress={onCloseModal}
                >

                    <View styles={styles.modal}>
                        <AddressView
                            street={street}
                            number={number}
                            zipCode={zipCode}
                            city={city}/>

                        <Button
                            title='Ja, diese Adresse bitte zu meinem Kontakt hinzufügen'
                            color='#E20074'
                            onPress={this.getCurrentLocationData}
                            styles={styles.submit}
                        />
                        <Button
                            title='x'
                            color='#7C7C7C'
                            onPress={onCloseModal}
                            styles={styles.close}
                        />

                    </View>

                </Modal>

            </View>

        );
    }
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#4B4B4B',
        padding: 100,
        height: 20,
        width: 20
    },
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 100
    },
    close: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    submit: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }

});

export default DetailsModal;