import React, { Component } from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, Share, ScrollView, Image, StyleSheet, Linking } from 'react-native';
import { CustomHeader } from '../index'
import { color } from 'react-native-reanimated';
//import { } from 'react-native-gesture-handler';
//import { } from 'native-base';

export class DasturHaqida extends Component {


    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <CustomHeader title="Dastur haqida" navigation={this.props.navigation} />
                <ScrollView style={{ flex: 1, }}>

                    <View>
                        <Text style={{ fontSize: 25, fontWeight: 'bold', marginTop: 20, marginLeft: 10 }}>Arduino darslik</Text>
                        <Text style={{ fontSize: 12, marginTop: 5, marginLeft: 10 }}>Ilova versiyasi. 1.0</Text>
                    </View>
                    <View>
                        <Text style={styles.text1} >Android uchun mo'ljallanga dastlabki Arduino darslik ilovasi. Bu dastur robot va texnikaga qiziquvchi yoshlar uchun mo'ljallangan O'zbek tilidagi ilova.</Text>
                        <Text style={{ fontSize: 14, fontFamily: "Roboto", margin: 10, alignItems: 'center', justifyContent: 'center', }}>Ilova faoliyati haqidagi savollar yuzasidan Siz quyidagi sanab o'tilgan usullardan biri orqali biz bilan bog'lanishingiz mumkin. Sizning fikrlaringiz va xatolar to'g'risidagi xabarlaringdan minnatdor bo'lamiz.</Text>
                    </View>

                    <View style={{ borderBottomColor: '#A9A9A9', marginTop: 40, marginBottom: 5, alignSelf: 'center', width: 330, borderBottomWidth: 0.5, }} />

                    <View style={{ flex: 1, marginTop: 5, }}>
                        <Image style={{ left: 25, height: 20, width: 20, marginTop: 10 }} source={require('../images/Info_blue.png')} resizeMode="contain" />
                        <TouchableOpacity style={{ flex: 1, bottom: 20, left: 55, justifyContent: 'center' }} >
                            <Text style={styles.Text}>Xato haqida xabar berish</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flex: 1, }}>
                        <Image style={{ left: 25, height: 20, width: 20, }} source={require('../images/Comment.png')} />
                        <TouchableOpacity style={{ flex: 1, bottom: 20, left: 55, justifyContent: 'center' }} >
                            <Text style={styles.Text}>Izoh qoldirish</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flex: 1, }}>
                        <Image style={{ left: 25, height: 20, width: 20, }} source={require('../images/Updates.png')} />
                        <TouchableOpacity style={{ flex: 1, bottom: 20, left: 55, justifyContent: 'center' }} >
                            <Text style={styles.Text}>Versiyani yangiash</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flex: 1, }}>
                        <Image style={{ left: 25, height: 20, width: 20, }} source={require('../images/Letter.png')} />
                        <TouchableOpacity style={{ flex: 1, bottom: 20, left: 55, justifyContent: 'center' }} >
                            <Text style={styles.Text}>Pochta</Text>
                            <Text style={{ fontSize: 12, }}>doston_mardiyev@mail.ru</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flex: 1, }}>
                        <Image style={{ left: 25, height: 20, width: 20, }} source={require('../images/Telegram.png')} />
                        <TouchableOpacity style={{ flex: 1, bottom: 20, left: 55, justifyContent: 'center' }} onPress={() => Linking.openURL('https://t.me/Doston_Mardiyev')}>
                            <Text style={styles.Text}>Telegram</Text>
                            <Text style={{ fontSize: 12, }}>@Doston_Mardiyev</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flex: 1, }}>
                        <Image style={{ left: 25, height: 20, width: 20, }} source={require('../images/Instagram.png')} />
                        <TouchableOpacity style={{ flex: 1, bottom: 20, left: 55, justifyContent: 'center' }} onPress={() => Linking.openURL('https://www.instagram.com/doston_mardiyev?r=nametag')}>
                            <Text style={styles.Text}>Instagram</Text>
                            <Text style={{ fontSize: 12, }}>doston_mardiyev</Text>
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