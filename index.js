import React, { Component } from 'react'
import { AppRegistry, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import { TabNavigator } from 'react-navigation';

//redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import allReducers from './reducers';
import TaskManagerComponent from './components/TaskManagerComponent';
import TabListDoneContainer from './containers/TabListDoneContainer';

let store = createStore(allReducers);

class TabDone extends Component {
    static navigationOptions = {
        title:'Done tasks'
    };
    render() {
        return (
            <TabListDoneContainer />
        )
    }
}

class Home extends Component {
    static navigationOptions = {
        title:'All tasks'
    };
    render() {
        return (
            <Provider store={store}>
                <TaskManagerComponent />
            </Provider>
        )
    }
}

const Main = TabNavigator(
    {
        Home: {
            screen: Home,
        },
        TabDone: {
            screen: TabDone,
        },
    },
    {
        tabBarPosition: 'bottom',
        animationEnabled: true,
        tabBarOptions: {
            activeTintColor: 'white',
            activeBackgroundColor: '#3496F0',
            style: {
                borderTopColor: '#3496F0',
                borderColor: '#3496f0',
                height: 35
            },
            labelStyle:{fontSize: 16, marginBottom: 7}
        },
    },
);

const App = () => (
    <Provider store={store}>
        <Main />
    </Provider>
)

AppRegistry.registerComponent('demoRedux', () => App);
