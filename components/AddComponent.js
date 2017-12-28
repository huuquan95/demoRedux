import React, { Component } from 'react';
import {
    AppRegistry, FlatList,
    StyleSheet, Text, View, Image, Alert, Platform,
    TouchableHighlight,
    RefreshControl, TextInput, TouchableOpacity
} from 'react-native';

export default class AddComponent extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            newTaskName: ''
        });
    }

    _onChangeText = (text) => {
        this.setState({ newTaskName: text });
    }

    render() {
        return (
            <View style={{
                backgroundColor: '#3496F0',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 10
            }}>

                <TouchableOpacity
                    onPress={() => {
                        alert('You have just hitted a Menu button')
                    }}
                >
                    <Image
                        style={{ width: 30, height: 30 }}
                        source={require('../icons/icon-menu.png')}>
                    </Image>
                </TouchableOpacity>

                <Text
                    style={{
                        fontSize: 20,
                        color: 'white',
                    }}
                >
                    Quinto App
                </Text>

                <TouchableOpacity
                    onPress={this.props.onToggleAddTaskModal}
                >
                    <Image style={{ width: 35, height: 35 }}
                        source={require('../icons/icon-add2.png')}>
                    </Image>
                </TouchableOpacity>
            </View>
        )
    }
}