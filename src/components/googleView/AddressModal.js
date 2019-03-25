import React, {Component, Fragment} from 'react';
import Overlay from 'react-native-modal-overlay';
import {Text, StyleSheet} from 'react-native';


class AddressModal extends Component {

    state = {
        modalVisible: true
    };

    onClose=()=>this.setState({modalVisible: false});


    render() {

        return (
           <Overlay
               visible={this.state.modalVisible}
               onClose={this.onClose}
               closeOnTouchOutside
               animationType="zoomIn"
               containerStyle={{backgroundColor: 'rgba(37, 8, 10, 0.78)'}}
               childrenWrapperStyle={{backgroundColor: '#eee'}}
               animationDuration={500}
           >
               <Text>Straße:</Text>
               <Text>Postleitzahl:</Text>
               <Text>Ort:</Text>
               <Text>Land</Text>
           </Overlay>


        );

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    dialogContentView: {
        // flex: 1,
        paddingLeft: 18,
        paddingRight: 18
        // backgroundColor: '#000',
        // opacity: 0.4,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    actionContainerStyle: {
        height: 100,
        flexDirection: 'column'
    }

});

export default AddressModal