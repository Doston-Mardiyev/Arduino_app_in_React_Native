import React, { Component } from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, ScrollView, StyleSheet, Image, Button } from 'react-native';


export class Menu extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView >
                    <View >
                        <TouchableOpacity style={{
                            flexDirection: 'row',
                            //backgroundColor: '#fff',
                            justifyContent: 'center',
                            margin: 20,
                            borderRadius: 10,
                            height: 100,
                            width: 130,
                            borderWidth: 1,
                            borderColor: '#fff',
                            alignItems: 'center',
                            justifyContent: 'center',
                            // marginTop: 10,
                            //elevation: 1,
                        }} onPress={() => this.props.navigation.navigate('HomeApp')}>
                            <Text style={styles.text_button} >Menu</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Loyhalar')}>
                        <Text style={styles.text_button} >Loyhalar</Text>
                    </TouchableOpacity>



                </ScrollView>
            </SafeAreaView >
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00979D',

    },
    card: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        justifyContent: 'center',
        // alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 10,
        height: 170,
        width: 340,
        marginTop: 10,
        elevation: 3,

    },
    img: {
        flex: 1,
        height: 120,
        width: 130,


    },
    text_button: {

        color: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',

    }
}
)