import React, { Component } from 'react';
import {
    AppRegistry, FlatList,
    StyleSheet, Text, View, Image, Alert, Platform,
    TouchableHighlight, TouchableOpacity,
    RefreshControl, TextInput
} from 'react-native';
import AddContainer from '../containers/AddContainer';
import AddModalContainer from '../containers/AddModalContainer';
import TaskListContainer from '../containers/TaskListContainer';
import { Button } from 'react-native';

export default class TaskManagerComponent extends Component {

    render() {
        console.log('TaskManagerComponent', this.props.navigation);
        return (
            <View >
                <TaskListContainer />
            </View>
        )
    }
}