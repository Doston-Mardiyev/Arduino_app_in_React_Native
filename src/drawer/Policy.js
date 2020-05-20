import React, { Component } from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, Share, ScrollView, Image, StyleSheet, Linking } from 'react-native';
import { CustomHeader } from '../index'


export class Policy extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <CustomHeader title="Privacy policy" navigation={this.props.navigation} />
                <ScrollView style={{ flex: 1, }}>

                    <View>
                        <Text>
                            blablabus
                        </Text>
                    </View>



                </ScrollView>
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    Text: {
        justifyContent: 'center',
        color: '#1E90FF',
        fontSize: 15,
    },
    text1: {
        fontSize: 14,
        fontFamily: "Roboto",
        // fontStyle: 'italic',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    }
}
)