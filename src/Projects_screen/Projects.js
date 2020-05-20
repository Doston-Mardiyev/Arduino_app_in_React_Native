import React, { Component } from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, ScrollView, StyleSheet, Image, Button } from 'react-native';
import { CustomHeader } from '../index'

export class Projects extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#EAEAF0' }}>
                <CustomHeader title="Dars_LED" navigation={this.props.navigation} />
                <ScrollView>

                    <View style={styles.card}>
                        <View style={{ flex: 1, height: 120, width: 110, marginTop: 20 }}>
                            <Image source={require('../images/LED3.gif')} style={styles.img} />
                        </View>

                        <View style={{ flex: 1.5 }} >
                            <Text style={{ justifyContent: 'center', marginLeft: 40, fontSize: 13, fontWeight: "bold", }}>Birinchi dars</Text>
                            <Text style={{ justifyContent: 'center', alignItems: 'center', fontSize: 12, fontWeight: "bold", }}>LED chiqroqlaridan foydalanish</Text>
                            <Text style={{ justifyContent: 'center', alignItems: 'center', fontSize: 12, marginTop: 5 }}>  AVR  undan ko'p  (I / O) pinlariga ega, ular sensorlar, aktuatorlar va boshqa qo’shimcha qo’shib mikrokontrollerning imkoniyatlarini yanada kengaytirishda foydalaniladi.
                                {"\n"}</Text>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('LessonLED')}>
                                <Text style={styles.text_button} >Davomi...</Text>
                            </TouchableOpacity>
                        </View>
                    </View>


                    <View style={styles.card}>
                        <View style={{ flex: 1, height: 120, width: 110, marginTop: 20 }}>
                            <Image source={require('../images/LED3.gif')} style={styles.img} />
                        </View>

                        <View style={{ flex: 1.5 }} >
                            <Text style={{ justifyContent: 'center', marginLeft: 40, fontSize: 13, fontWeight: "bold", }}>Birinchi dars</Text>
                            <Text style={{ justifyContent: 'center', alignItems: 'center', fontSize: 12, fontWeight: "bold", }}>LED chiqroqlaridan foydalanish</Text>
                            <Text style={{ justifyContent: 'center', alignItems: 'center', fontSize: 12, marginTop: 5 }}>  AVR  undan ko'p  (I / O) pinlariga ega, ular sensorlar, aktuatorlar va boshqa qo’shimcha qo’shib mikrokontrollerning imkoniyatlarini yanada kengaytirishda foydalaniladi.
                                {"\n"}</Text>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('SecondLesson')}>
                                <Text style={styles.text_button} >Davomi...</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.card}>
                        <View style={{ flex: 1, height: 120, width: 110, marginTop: 20 }}>
                            <Image source={require('../images/LED3.gif')} style={styles.img} />
                        </View>

                        <View style={{ flex: 1.5 }} >
                            <Text style={{ justifyContent: 'center', marginLeft: 40, fontSize: 13, fontWeight: "bold", }}>Birinchi dars</Text>
                            <Text style={{ justifyContent: 'center', alignItems: 'center', fontSize: 12, fontWeight: "bold", }}>LED chiqroqlaridan foydalanish</Text>
                            <Text style={{ justifyContent: 'center', alignItems: 'center', fontSize: 12, marginTop: 5 }}>  AVR  undan ko'p  (I / O) pinlariga ega, ular sensorlar, aktuatorlar va boshqa qo’shimcha qo’shib mikrokontrollerning imkoniyatlarini yanada kengaytirishda foydalaniladi.
                                {"\n"}</Text>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('LessonLED')}>
                                <Text style={styles.text_button} >Davomi...</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.card}>
                        <View style={{ flex: 1, height: 120, width: 110, marginTop: 20 }}>
                            <Image source={require('../images/LED3.gif')} style={styles.img} />
                        </View>

                        <View style={{ flex: 1.5 }} >
                            <Text style={{ justifyContent: 'center', marginLeft: 40, fontSize: 13, fontWeight: "bold", }}>Birinchi dars</Text>
                            <Text style={{ justifyContent: 'center', alignItems: 'center', fontSize: 12, fontWeight: "bold", }}>LED chiqroqlaridan foydalanish</Text>
                            <Text style={{ justifyContent: 'center', alignItems: 'center', fontSize: 12, marginTop: 5 }}>  AVR  undan ko'p  (I / O) pinlariga ega, ular sensorlar, aktuatorlar va boshqa qo’shimcha qo’shib mikrokontrollerning imkoniyatlarini yanada kengaytirishda foydalaniladi.
                                {"\n"}</Text>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('LessonLED')}>
                                <Text style={styles.text_button} >Davomi...</Text>
                            </TouchableOpacity>
                        </View>
                    </View>







                </ScrollView>
            </SafeAreaView >
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
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

        color: '#007ACC',
        marginLeft: 100,
        marginBottom: 5,

    }
}
)