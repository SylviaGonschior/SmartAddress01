import React from 'react';
import ContactsScreen from '../contacts/ContactsScreen';
import SettingsScreen from '../settings/SettingsScreen';
import { createBottomTabNavigator,createAppContainer } from 'react-navigation';


const TabScreens = createBottomTabNavigator({
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

const Tabs = createAppContainer(TabScreens);

export default Tabs;