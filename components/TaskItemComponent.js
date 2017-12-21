import React, { Component } from 'react';
import {
    AppRegistry, FlatList,
    StyleSheet, Text, View, Image, Alert, Platform,
    TouchableHighlight,
    RefreshControl, TextInput, TouchableOpacity
} from 'react-native';

export default class TaskItemComponent extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <TouchableOpacity
                    onPress={(event) => {
                        this.props.onToggleTask(this.props.taskId);
                    }}
                >
                    <Text style={{ fontSize:25, textAlign:'center',
                        margin: 5, color: this.props.completed == true ? 'blue' : 'red'
                    }}>
                        {this.props.taskId + 1}. {this.props.taskName}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    };
}