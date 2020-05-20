import React, { Component } from 'react'
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { CustomHeader } from '../index'

export class Codding extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <CustomHeader title="Simulator" navigation={this.props.navigation} />
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Simulator</Text>
                </View>
            </SafeAreaView>
        );
    }
}