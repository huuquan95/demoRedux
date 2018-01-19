import React, { Component } from 'react'
import {
    AppRegistry,
    Text, TouchableOpacity, Image, View,
    Dimensions,
    Platform,
    Button
} from 'react-native';
import { TabNavigator, DrawerNavigator, DrawerItems } from 'react-navigation';

//redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import allReducers from './reducers';
import TaskManagerComponent from './components/TaskManagerComponent';
import TabListDoneContainer from './containers/TabListDoneContainer';
import AddContainer from './containers/AddContainer';
import AddModalContainer from './containers/AddModalContainer';
import DrawerSlide from './components/DrawerSlide';

let store = createStore(allReducers);

class Setting extends Component {
    render() {
        return (
            <Text style={{ marginTop: 34 }}>Setting Tab.</Text>
        )
    }
}

class AboutApp extends Component {
    render() {
        return (
            <Text style={{ marginTop: 34 }}>About Tab.</Text>
        )
    }
}

const Tasks = TabNavigator(
    {
        AllTasks: {
            screen: TaskManagerComponent,
            navigationOptions: {
                drawerLabel: 'All tasks'
            }
        },
        DoneTasks: {
            screen: TabListDoneContainer,
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
            activeBackgroundColor: '#3496F0',
            inactiveBackgroundColor: '#00e640',
            style: {
                borderTopColor: '#3496F0',
                borderColor: '#3496f0',
            },
            tabStyle: {
                height: 45
            },
            labelStyle: { fontSize: 16, marginBottom: 7 },
            upperCaseLabel: false,
        },
    },
);

class TasksComponent extends Component {
    render() {
        return (
            <View style={{ flex: 1, marginTop: Platform.OS === 'ios' ? 34 : 0 }} >
                <AddContainer drawerNavigation={this.props.navigation} />
                <AddModalContainer></AddModalContainer>
                <Tasks />
            </View>
        )
    }
}

const DrawerApp = DrawerNavigator(
    {
        Tasks: {
            screen: TasksComponent,
            navigationOptions: {
                drawerLabel: 'Tasks'
            }
        },
        Setting: {
            screen: Setting,
        },
        AboutApp: {
            screen: AboutApp,
            navigationOptions: {
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
