import React from 'react';
import ContactsScreen from '../contacts/ContactsScreen';
import SettingsScreen from '../settings/SettingsScreen';
import HomeScreen from './HomeScreen';
import {createBottomTabNavigator, createAppContainer, createStackNavigator} from 'react-navigation';
import ContactDetail from '../contacts/ContactDetail';
import {Icon} from 'native-base';
import ContactContainer from "../../containers/ContactContainer";


const TabScreens = createBottomTabNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel:"Home",
            tabBarIcon:({ focused }) => (
                <Icon
                    name= 'home'
                    size={20}
                    style={{color: focused ? '#262626' : '#FFFFFF', marginTop:30, height:25, width: 110 }}
                />
            ),
            showIcon: true
        }
    },
    Contacts: {
        screen: props => <ContactContainer
            Layout={ContactsScreen}
            {...props}/>,
        navigationOptions: {
            tabBarLabel:"Kontakte",
            tabBarIcon:({ focused }) => (
                <Icon
                    name= 'contacts'
                    size={20}
                    style={{color: focused ? '#262626' : '#FFFFFF', marginTop:30, height:25, width: 140 }}
                />
            ),
            showIcon: true
        }
    },
    Settings: {
        screen: SettingsScreen,
        navigationOptions: {
            tabBarLabel:"Settings",
            tabBarIcon:({ focused }) => (
                <Icon
                    name= 'settings'
                    size={20}
                    style={{color: focused ? '#262626' : '#FFFFFF', marginTop:30, height:25, width: 130 }}
                />
            ),
            showIcon: true
        }

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


const AppNavigator = createStackNavigator(
    {
        Root: {
            screen: TabScreens,
        },
        Details: {
            screen: ContactDetail
        }
    },
    {
        initialRoute: 'Home',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            header: null
        }
    }
);

const Tabs = createAppContainer(AppNavigator);

export default Tabs;