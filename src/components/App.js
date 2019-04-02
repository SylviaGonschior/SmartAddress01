import React, {Component} from 'react';
import {Container, StyleProvider} from 'native-base';
import getTheme from '../theme/components';
import material from '../theme/variables/telekom';
import {createStore, applyMiddleware} from 'redux';
import reduce from './../reducers/index';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import Tabs from './home/Navigation';

let store = createStore(reduce, applyMiddleware(thunkMiddleware));

export default class App extends Component {


    render() {

        return (
            <Provider
                store={store}>
                <StyleProvider
                    style={getTheme(material)}>

                    <Container>

                        <Tabs/>



                    </Container>

                </StyleProvider>
            </Provider>

        );
    }
}
