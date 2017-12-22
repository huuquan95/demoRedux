import React, { Component } from 'react';
import {
    AppRegistry, FlatList,
    StyleSheet, Text, View, Image, Alert, Platform,
    TouchableHighlight,
    RefreshControl, TextInput, TouchableOpacity
} from 'react-native';

import { addNewTask } from '../actions';

export default class AddComponent extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            newTaskName: ''
        });
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
                    
                    onPress={(event) => {
                        alert('Please wait me.')
                    }}
                >
                    <Image style={{ width: 30, height: 30 }}
                        source={require('../icons/icon-menu.png')}>
                    </Image>
                </TouchableOpacity>
                <TextInput
                    style={{ fontSize: 20, color: 'white' , width: 270, textAlign:'center'}}
                    keyboardType='default'
                    placeholderTextColor='white'
                    placeholder='Enter task name'
                    autoCapitalize='none'
                    onChangeText={
                        (text) => {
                            this.setState({ newTaskName: text })
                        }
                    }
                >
                </TextInput>
                <TouchableOpacity
                    onPress={(event) => {
                        if (!this.state.newTaskName.trim()) {
                            return;
                        }
                        this.props.onClickAdd(this.state.newTaskName);
                    }}
                >
                    <Image style={{ width: 35, height: 35 }}
                        source={require('../icons/icon-add2.png')}>
                    </Image>
                </TouchableOpacity>

            </View>
        )
    }
}