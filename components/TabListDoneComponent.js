import React, { Component } from 'react';
import {
    AppRegistry, FlatList,
    StyleSheet, Text, View, Image, Alert, Platform,
    TouchableHighlight,
    RefreshControl, TextInput
} from 'react-native';
import TaskItemContainer from '../containers/TaskItemContainer'


export default class TaskListDoneComponent extends Component {

    render() {
        return (
            <FlatList
                //const result = words.filter(word => word.length > 6);

                //data={this.props.tasks}
                data={}

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