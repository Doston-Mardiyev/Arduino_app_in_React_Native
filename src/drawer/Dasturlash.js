import React, { Component } from 'react'
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { CustomHeader } from '../index'

export class Dasturlash extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <CustomHeader title="Dasturlash" navigation={this.props.navigation} />
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Dasturlash</Text>
                </View>
            </SafeAreaView>
        );
    }
}