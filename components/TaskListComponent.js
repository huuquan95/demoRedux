import React, { Component } from 'react';
import {
    AppRegistry, FlatList,
    StyleSheet, Text, View, Image, Alert, Platform,
    TouchableHighlight,
    RefreshControl, TextInput
} from 'react-native';
import TaskItemContainer from '../containers/TaskItemContainer';
import Api from '../api/Api'


export default class TaskListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { tasks: [] }
    }

    componentDidMount() {
        this.props.onFetchDataFistTime();
    }

    render() {
        return (
            <FlatList
                data={this.props.tasks}
                renderItem={({ item, index }) => {
                    return (
                        <  TaskItemContainer  {...item}>
                        </TaskItemContainer>
                    );
                }}
                keyExtractor={(item, index) => item.taskName}
            >
            </FlatList>
        );
    }
}