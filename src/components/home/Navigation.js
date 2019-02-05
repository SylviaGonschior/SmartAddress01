import React from 'react';
import ContactsScreen from '../contacts/ContactsScreen';
import SettingsScreen from '../settings/SettingsScreen';
import HomeScreen from './HomeScreen';
import { createBottomTabNavigator,createAppContainer, createStackNavigator } from 'react-navigation';
import ContactItemScreen from '../contacts/ContactItemScreen';


const TabScreens = createBottomTabNavigator({
    Home: {
        screen: HomeScreen,
        tabBarOptions: {
            title: 'Contacts'}
    },
    Contacts: {
        screen: ContactsScreen,
        tabBarOptions: {
            title: 'Contacts',
            activeTintColor: '#e91e63',
            labelStyle: {
                fontSize: 12,
            },
            style: {
                backgroundColor: '#e91e63',
                margin: 5,
                paddingBottom: 10
            },
        },
        tabBarPosition: 'top'
    },
    Settings: {
        screen: SettingsScreen,
        tabBarOptions: {
            title: 'Contacts',
            activeTintColor: '#696969',
            labelStyle: {
                fontSize: 12,
            },
            style: {
                backgroundColor: '#e91e63',
                margin: 5,
                paddingBottom: 10
            },
        },
        tabBarPosition: 'top'
        }
    });

const AppNavigator = createStackNavigator({
    Root: {
        screen: TabScreens
    },
    Item: {
        screen: ContactItemScreen
    }

});

const Tabs = createAppContainer(AppNavigator);

export default Tabs;