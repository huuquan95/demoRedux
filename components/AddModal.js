import React, { Component } from 'react';
import {
    AppRegistry,
    FlatList, StyleSheet,
    Text, View, Image, Alert, TextInput,
    Platform,
    TouchableHighlight, Dimensions,
} from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';

var screen = Dimensions.get('window');
export default class AddModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newTaskName: '',
            newTaskDescription: ''
        }
    }

    _onChangeTaskName = (text) => {
        this.setState({ newTaskName: text });
    }

    _onChangeTaskDescription = (text) => {
        this.setState({ newTaskDescription: text });
    }

    render() {
        return (
            <Modal
                onClosed={() => {
                    if (this.props.isShowAddTaskModal)
                        this.props.onToggleAddTaskModal();
                }}
                isOpen={this.props.isShowAddTaskModal}
                style={{
                    justifyContent: 'space-around',
                    borderRadius: Platform.OS === 'ios' ? 20 : 10,
                    shadowRadius: 10,
                    width: screen.width - 80,
                    height: 280
                }}
                position='center'
                backdrop={true}
            >

                <Text
                    style={{
                        color: '#3496F0',
                        fontSize: 20,
                        fontWeight: 'bold',
                        textAlign: 'center',
                    }}
                >Add New Task</Text>

                <TextInput
                    style={{
                        fontSize: 16,
                        height: 40,
                        borderColor: 'gray',
                        marginLeft: 30,
                        marginRight: 30,
                        borderBottomWidth: 1
                    }}
                    placeholderTextColor='#BDC3C7'
                    placeholder='Task name'
                    onChangeText={this._onChangeTaskName}
                ></TextInput>

                <TextInput
                    style={{
                        fontSize: 16,
                        height: 40,
                        borderColor: 'gray',
                        marginLeft: 30,
                        marginRight: 30,
                        borderBottomWidth: 1
                    }}
                    placeholderTextColor='#BDC3C7'
                    placeholder='Task description'
                    onChangeText={this._onChangeTaskDescription}
                ></TextInput>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        marginLeft: 30,
                        marginRight: 30
                    }}
                >
                    <Button
                        style={{ color: 'gray', fontSize: 20 }}
                        onPress={this.props.onToggleAddTaskModal}
                    >
                        Cancel
                    </Button>

                    <Button
                        style={{ color: 'red', fontSize: 20 }}
                        onPress={() => {
                            if (this.state.newTaskName.length == 0 || this.state.newTaskDescription.length == 0) {
                                alert('Please fulfill this form');
                            }
                            else {
                                this.props.onToggleAddTaskModal()
                            }
                        }}
                    >
                        Done
                    </Button>
                </View>
            </Modal >
        );
    }
}