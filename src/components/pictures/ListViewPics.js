import React, {Component} from 'react';
import {View, ListView, StyleSheet, Text} from 'react-native';
import {Col, Thumbnail} from "native-base";
import PropTypes from 'prop-types';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});


class ListViewPics extends Component {

    constructor() {
        super();
        this.state = {
            dataSource: ds.cloneWithRows([

                {
                    first: 'Caro',
                    last: 'Neumann',
                    image: require('../../pics/photoBG.png')
                },

                {
                    first: 'Martin',
                    last: 'Neumann',
                    image: require('../../pics/photoTG.png')

                },

                {
                    first: 'Celine',
                    last: 'Neumann',
                    image: require('../../pics/photoSG.png')
                }

            ]),
        };
    }


    _renderRow(rowData) {
        return (
        <View style={styles.data}>
        <Text>{rowData.first} {rowData.last}</Text>
            <Thumbnail large style={styles.image} source={rowData.image}/>
            </View>)
    }

    render() {



        return (
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
    },
    data: {
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5

    },
    image: {
        width: 70,
        height: 70,
        marginRight: 5
    },
    separator: {
        flex: 1,
        backgroundColor: '#8E8E8E'
    }
});

export default ListViewPics;