import React, {Component} from 'react';
import Tabs from './src/components/home/Navigation';
import { Container, StyleProvider } from 'native-base';
import getTheme from './src/theme/components/index';
import material from './src/theme/variables/telekom';


export default class App extends Component {


    render() {

        return (
            <StyleProvider style={getTheme(material)}>

            <Container>

                    <Tabs />

            </Container>

            </StyleProvider>


        );
    }
}
