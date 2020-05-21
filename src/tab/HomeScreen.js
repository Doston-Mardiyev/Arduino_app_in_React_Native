import React, { Component } from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, Image, ScrollView, StyleSheet, Linking, Alert, BackHandler, } from 'react-native';
import { CustomHeader } from '../index'

export class HomeScreen extends Component {

    backAction = () => {
        Alert.alert("Hold on!", "Are you sure you want to go back?", [
            {
                text: "Cancel",
                onPress: () => null,
                style: "cancel"
            },
            { text: "YES", onPress: () => BackHandler.exitApp() }
        ]);
        return true;
    };

    componentDidMount() {
        this.backHandler = BackHandler.addEventListener("hardwareBackPress", this.backAction);
    }

    // componentWillUnmount() {
    //     this.backHandler.remove();
    // }

    render() {

        return (
            <SafeAreaView style={styles.container}>
                <CustomHeader title="Home" isHome={true} navigation={this.props.navigation} />

                <ScrollView>

                    <View style={{ flexDirection: 'row-reverse', alignSelf: 'center', marginTop: 35, }}>
                        <TouchableOpacity style={styles.box1} onPress={() => { this.backHandler.remove(); this.props.navigation.navigate('ArduinoIDE') }}>
                            <Image style={{ alignSelf: 'center', width: 60, height: 60, }} source={require('../images/Arduino_green.png')} />
                            <Text style={styles.text}>Arduino IDE</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.box} onPress={() => { this.backHandler.remove(); this.props.navigation.navigate('HomeDetail') }}>
                            <Image style={{ alignSelf: 'center', width: 60, height: 60, }} source={require('../images/board2.png')} />
                            <Text style={styles.text}> Arduino haqida</Text>
                        </TouchableOpacity>
                    </View>


                    <View style={{ flexDirection: 'row-reverse', alignSelf: 'center', }} >
                        <TouchableOpacity style={styles.box1} onPress={() => { this.backHandler.remove(); this.props.navigation.navigate('Loyhalar') }}>
                            <Image style={{ alignSelf: 'center', width: 60, height: 60, }} source={require('../images/Classroom.png')} />
                            <Text style={styles.text}> Darslar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.box} onPress={() => { this.backHandler.remove(); this.props.navigation.navigate('Dasturlash') }}>
                            <Image style={{ alignSelf: 'center', width: 60, height: 60, }} source={require('../images/SourceCode.png')} />
                            <Text style={styles.text}>Dasturlash</Text>
                        </TouchableOpacity>
                    </View>


                    <View style={{ flexDirection: 'row-reverse', alignSelf: 'center', }} >
                        <TouchableOpacity style={styles.box1} onPress={() => Linking.openURL('https://t.me/Doston_Mardiyev')}>
                            <Image style={{ alignSelf: 'center', width: 50, height: 50, }} source={require('../images/Cart.png')} />
                            <Text style={styles.text}>Harid qilish</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.box} onPress={() => { this.backHandler.remove(); this.props.navigation.navigate('Simulator') }}>
                            <Image style={{ alignSelf: 'center', width: 40, height: 40, marginTop: 7 }} source={require('../images/tinkercad.png')} />
                            <Text style={styles.text}>Simuliyator</Text>
                        </TouchableOpacity>
                    </View>


                    <View style={{ flexDirection: 'column', alignSelf: 'center', }} >
                        <TouchableOpacity style={styles.box3} onPress={() => Linking.openURL('https://www.youtube.com/channel/UCLez_jmF63G_dtss8CXylSA?view_as=subscriber')}>
                            <Image style={{ flex: 1, alignSelf: 'center', width: 60, height: 60, }} source={require('../images/Play.png')} />
                            <Text style={styles.text}>Video darsliklar</Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>
            </SafeAreaView>

        );
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEEEEE'

    },

    box: {
        flexDirection: 'column',
        justifyContent: 'center',
        borderRadius: 10,
        height: 120,
        width: 120,
        borderWidth: 1,
        margin: 10,
        borderColor: '#00979D',

    },
    box1: {
        flexDirection: 'column',
        justifyContent: 'center',
        borderRadius: 10,
        height: 120,
        width: 120,
        borderWidth: 1,
        margin: 10,
        marginLeft: 50,
        borderColor: '#00979D',

    },
    box3: {
        flexDirection: 'column',
        justifyContent: 'center',
        borderRadius: 10,
        height: 90,
        width: 300,
        borderWidth: 1,
        margin: 10,
        borderColor: '#00979D',

    },
    text: {

        color: '#00979D',
        fontFamily: "Roboto",
        fontSize: 14,
        fontWeight: "400",
        margin: 5,
        // marginTop: 70,
        alignSelf: 'center',

    }
})