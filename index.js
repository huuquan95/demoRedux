import React, { Component } from 'react'
import { AppRegistry, Text } from 'react-native';
import { TabNavigator } from 'react-navigation';

//redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import allReducers from './reducers';
import TaskManagerComponent from './components/TaskManagerComponent';
import TabListDoneContainer from './containers/TabListDoneContainer';

let store = createStore(allReducers);

class TabDone extends Component {
    render() {
        return (
            <TabListDoneContainer />
        )
    }
}

class Home extends Component {
    state = {}
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
            activeTintColor: 'green',
            inactiveTintColor: 'black'
        },
    });

const App = () => (
    <Provider store={store}>
        <Main />
    </Provider>
)

AppRegistry.registerComponent('demoRedux', () => App);
