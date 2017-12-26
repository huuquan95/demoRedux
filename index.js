import React, { Component } from 'react'
import {
    AppRegistry,
    Text, TouchableOpacity, Image,
    Dimensions,
    Platform,
    Button
} from 'react-native';
import { TabNavigator, DrawerNavigator } from 'react-navigation';

//redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import allReducers from './reducers';
import TaskManagerComponent from './components/TaskManagerComponent';
import TabListDoneContainer from './containers/TabListDoneContainer';

let store = createStore(allReducers);

class AllTasks extends Component {
    render() {
        return (
            <TaskManagerComponent />
        )
    }
}

class DoneTasks extends Component {
    render() {
        return (
            <TabListDoneContainer />
        )
    }
}

class Setting extends Component {
    render() {
        return (
            <Text>This is Setting Tab.</Text>
        )
    }
}

class AboutApp extends Component {
    render() {
        return (
            <Text>This is About Tab.</Text>
        )
    }
}

const Tasks = TabNavigator(
    {
        AllTasks: {
            screen: AllTasks,
            navigationOptions: {
                drawerLabel: 'All tasks'
            }
        },
        DoneTasks: {
            screen: DoneTasks,
            navigationOptions: {
                drawerLabel: 'Done tasks'
            }
        },
    },
    {
        swipeEnabled: true,
        tabBarPosition: 'bottom',
        animationEnabled: true,
        tabBarOptions: {
            activeTintColor: 'white',
            //  inactiveTintColor:'#ECF0F1',
            activeBackgroundColor: '#3496F0',
            inactiveBackgroundColor: '#00e640',
            style: {
                borderTopColor: '#3496F0',
                borderColor: '#3496f0',
                //  height: Platform.OS === 'ios' ? 35 : 50
            },
            tabStyle: {
                height: 45
            },
            labelStyle: { fontSize: 16, marginBottom: 7 },
            upperCaseLabel: false,
        },
    },
);

const DrawerApp = DrawerNavigator(
    {
        Tasks: {
            screen: Tasks,
            navigationOptions: {
                drawerLabel: 'Tasks'
            }
        }, Setting: {
            screen: Setting,
        }, AboutApp: {
            screen: AboutApp, navigationOptions: {
                drawerLabel: 'About App'
            }
        },
    }
)

const App = () => (
    <Provider store={store}>
        <DrawerApp />
    </Provider>
)

AppRegistry.registerComponent('demoRedux', () => App);
