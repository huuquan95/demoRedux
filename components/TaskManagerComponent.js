import React, { Component } from 'react';
import {
    AppRegistry, FlatList,
    StyleSheet, Text, View, Image, Alert, Platform,
    TouchableHighlight,
    RefreshControl, TextInput
} from 'react-native';

import AddContainer from '../containers/AddContainer';
import TaskListContainer from '../containers/TaskListContainer';
import AddModal from './AddModal';
import { Button } from 'react-native';

export default class TaskManagerComponent extends Component {

    _onPressAdd = () => {
        this.refs.addModal._showAddModal();
    }

    render() {
        return (
            <View style={{ flex: 1, marginTop: Platform.OS === 'ios' ? 34 : 0 }}
            >
                <AddContainer _onPressAdd={this._onPressAdd} />
                <TaskListContainer />
                <AddModal ref={'addModal'}></AddModal>
            </View>
        )
    }
}