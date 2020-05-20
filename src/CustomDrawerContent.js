import React, { Component } from 'react'
import { Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

export class CustomDrawerContent extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={{ height: 150, alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={require('./images/Arduino_type.jpg')} style={{ height: 150, width: 280 }} />
                </View>

                <View style={styles.container}>
                    <ScrollView style={{ marginLeft: 5 }}>

                        {/* <View style={{ marginTop: 20 }}>
                            <Image source={require('../src/images/Arduino_50px.png')} style={{ left: 10, height: 30, width: 30 }} />
                            <TouchableOpacity
                                style={styles.drawers} onPress={() => this.props.navigation.navigate('MenuTab')}>
                                <Text>Arduino haqida</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ marginTop: 5 }}>
                            <Image source={require('../src/images/Code_64px.png')} style={{ left: 10, height: 30, width: 30 }} />
                            <TouchableOpacity
                                style={styles.drawers} onPress={() => this.props.navigation.navigate('Dasturlash')}>
                                <Text>Dasturlash</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ marginTop: 5 }}>
                            <Image source={require('../src/images/Creativity_50px.png')} style={{ left: 10, height: 30, width: 30 }} />
                            <TouchableOpacity
                                style={styles.drawers} onPress={() => this.props.navigation.navigate('Loyhalar')}>
                                <Text>Loyhalar</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ marginTop: 5 }}>
                            <Image source={require('../src/images/CircledF_48px.png')} style={{ left: 10, height: 30, width: 30 }} />
                            <TouchableOpacity style={styles.drawers} onPress={() => this.props.navigation.navigate('Simulator')} >

                                <Text>Simulation</Text>
                            </TouchableOpacity>
                        </View>
 */}
                        <Text style={{ marginTop: 20, marginLeft: 5 }}>Asosiy</Text>
                        <View style={{ borderBottomColor: '#A9A9A9', marginTop: 10, marginBottom: 30, width: 240, left: 18, borderBottomWidth: 0.5, }} />

                        <View style={styles.secondP}>
                            <Image source={require('../src/images/Info_64px.png')} style={{ right: 43, height: 30, width: 30, top: 25, }} />
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('DasturHaqida')}>
                                <Text>Dastur haqida</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.secondP}>
                            <Image source={require('../src/images/Book_64px.png')} style={{ right: 43, height: 30, width: 30, top: 25, }} />
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Contact')}>
                                <Text>Biz bilan aloqa</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.secondP}>
                            <Image source={require('../src/images/Updates_64px.png')} style={{ right: 43, height: 30, width: 30, top: 25, }} />
                            < TouchableOpacity >
                                <Text>Versiyani yangilash</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.secondP}>
                            <Image source={require('../src/images/Star_64px.png')} style={{ right: 43, height: 30, width: 30, top: 25, }} />
                            <TouchableOpacity>
                                <Text>Ilovani baholash</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.secondP}>
                            <Image source={require('../src/images/Security_50px.png')} style={{ right: 41, height: 30, width: 30, top: 25, }} />
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Policy')}>
                                <Text>Privacy policy</Text>
                            </TouchableOpacity>
                        </View>


                    </ScrollView>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    drawers: {
        flex: 1,
        bottom: 25,
        left: 55,
        justifyContent: 'center'
    },
    secondP: {
        flex: 1,
        bottom: 25,
        left: 55,
        justifyContent: 'center'

    },


});