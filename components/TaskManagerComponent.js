import React, { Component } from 'react';
import {
    AppRegistry, FlatList,
    StyleSheet, Text, View, Image, Alert, Platform,
    TouchableHighlight, TouchableOpacity,
    RefreshControl, TextInput
} from 'react-native';
import AddContainer from '../containers/AddContainer';
import TaskListContainer from '../containers/TaskListContainer';
import AddModalContainer from '../containers/AddModalContainer';
import AddModal from './AddModal';
import { Button } from 'react-native';

export default class TaskManagerComponent extends Component {

    render() {
        return (
            <View style={{ flex: 1, marginTop: Platform.OS === 'ios' ? 34 : 0 }}
            >
                <AddContainer _onPressAdd={this._onPressAdd} />
                <TaskListContainer />
                <AddModal></AddModal>
            </View>
        )
    }
}