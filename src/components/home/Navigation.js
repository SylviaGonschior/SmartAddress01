import React from 'react';
import ContactsScreen from '../contacts/ContactsScreen';
import SettingsScreen from '../settings/SettingsScreen';
import HomeScreen from './HomeScreen';
import {createBottomTabNavigator, createAppContainer, createStackNavigator} from 'react-navigation';
import ContactDetail from '../contacts/ContactDetail';

const TabScreens = createBottomTabNavigator({
    Home: {
        screen: HomeScreen,
    },
    Contacts: {
        screen: ContactsScreen,

        tabBarPosition: 'top'
    },
    Settings: {
        screen: SettingsScreen,

    }
}, {

    tabBarOptions: {
        activeTintColor: '#262626',
        inactiveTintColor: '#FFFFFF',
        labelStyle: {
            fontSize: 18,
            fontWeight: '400'

        },
        style: {
            backgroundColor: '#e91e63',
            margin: 20,
            paddingBottom: 15
        }
    }
});


const AppNavigator = createStackNavigator({
    Root: {
        screen: TabScreens,

    },
    Details: {
        screen: ContactDetail
    }

});

const Tabs = createAppContainer(AppNavigator);

export default Tabs;