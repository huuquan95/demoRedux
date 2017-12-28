import React, { Component } from 'react';
import {
    AppRegistry, FlatList,
    StyleSheet, Text, View, Image, Alert, Platform,
    TouchableHighlight,
    RefreshControl, TextInput, TouchableOpacity
} from 'react-native';

export default class TaskItemComponent extends Component {
    render() {
        let textToDisplay1 = `${this.props.taskName.slice(0, 50)}\n`;
        let textToDisplay2 = `Status:${this.props.completed == true ? 'Done' : 'In progress'}`;
        return (
            <View style={{
                marginLeft: 5, marginRight: 5, marginTop: 5,
                backgroundColor: this.props.completed == true ? '#22A7F0' : '#00e640',
                borderRadius: 10
            }}>
                <TouchableOpacity
                    onPress={(event) => {
                        this.props.onToggleTask(this.props.taskId);
                    }}
                    style={{ padding: 10 }}
                >
                    <Text
                        style={{
                            fontSize: 20,
                            fontFamily: 'arial',
                            fontWeight: 'bold',
                            paddingLeft: 10,
                            color: 'white'
                        }}>
                        {textToDisplay1}
                        <Text
                            style={{
                                fontSize: 15,
                                fontFamily: 'arial',
                                fontWeight: 'normal',
                                paddingLeft: 10,
                                color: 'white'
                            }}>
                            {textToDisplay2}
                        </Text>
                    </Text>
                </TouchableOpacity>
            </View>
        )
    };
}