import React, { Component } from 'react'
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { CustomHeader } from '../index'

export class ArduinoIDE extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <CustomHeader title="Arduino dasturi" navigation={this.props.navigation} />
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>ArduinoIDE</Text>
                </View>
            </SafeAreaView>
        );
    }
}