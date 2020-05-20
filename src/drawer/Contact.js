import React, { Component } from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, Share, ScrollView, Image, StyleSheet, Linking } from 'react-native';
import { CustomHeader } from '../index'


export class Contact extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <CustomHeader title="Biz bilan aloqa" navigation={this.props.navigation} />
                <ScrollView style={{ flex: 1, }}>

                    <View>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', margin: 5, marginLeft: 15, marginTop: 30 }}>
                            Biz bilan bog'laning
                       </Text>
                        <Text style={{ fontSize: 16, fontWeight: '400', margin: 5, marginLeft: 15, }}>
                            So'rovingizni yuboring va biz tez orada siz bilan bog'lanamiz.
                        </Text>
                    </View>
                    <View style={{ borderBottomColor: '#A9A9A9', marginTop: 20, marginBottom: 5, alignSelf: 'center', width: 330, borderBottomWidth: 0.5, }} />

                    <View style={{ flex: 1, marginTop: 40 }}>
                        <Image style={{ left: 25, height: 30, width: 30, }} source={require('../images/Play.png')} />
                        <TouchableOpacity style={{ flexDirection: 'row', bottom: 25, left: 65, alignItems: 'center' }} >
                            <Text style={styles.Text}>Video darsliklar </Text>
                        </TouchableOpacity>
                    </View>


                    <View style={{ flex: 1, }}>
                        <Image style={{ left: 25, height: 30, width: 30, }} source={require('../images/Cart.png')} />
                        <TouchableOpacity style={{ flex: 1, bottom: 25, left: 65, justifyContent: 'center' }} >
                            <Text style={styles.Text}>Arduino va sensorlarini harid qilish</Text>
                        </TouchableOpacity>
                    </View>


                    <View style={{ flex: 1, }}>
                        <Image style={{ left: 25, height: 30, width: 30, }} source={require('../images/Telegram.png')} />
                        <TouchableOpacity style={{ flex: 1, bottom: 30, left: 65, justifyContent: 'center' }} onPress={() => Linking.openURL('https://t.me/Doston_Mardiyev')}>
                            <Text style={styles.Text}>Facebook</Text>
                            <Text style={{ fontSize: 12, }}>@Doston_Mardiyev</Text>
                        </TouchableOpacity>
                    </View>



                    <View style={{ flex: 1, }}>
                        <Image style={{ left: 25, height: 27, width: 27, }} source={require('../images/Letter.png')} />
                        <TouchableOpacity style={{ flex: 1, bottom: 30, left: 65, justifyContent: 'center' }} >
                            <Text style={styles.Text}>Pochta</Text>
                            <Text style={{ fontSize: 12, }}>doston_mardiyev@mail.ru</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flex: 1, }}>
                        <Image style={{ left: 25, height: 30, width: 30, }} source={require('../images/Telegram.png')} />
                        <TouchableOpacity style={{ flex: 1, bottom: 30, left: 65, justifyContent: 'center' }} onPress={() => Linking.openURL('https://t.me/Doston_Mardiyev')}>
                            <Text style={styles.Text}>Telegram</Text>
                            <Text style={{ fontSize: 12, }}>@Doston_Mardiyev</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flex: 1, }}>
                        <Image style={{ left: 25, height: 33, width: 33, }} source={require('../images/Instagram.png')} />
                        <TouchableOpacity style={{ flex: 1, bottom: 30, left: 65, justifyContent: 'center' }} onPress={() => Linking.openURL('https://www.instagram.com/doston_mardiyev?r=nametag')}>
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
        fontWeight: '700',
    },
    text1: {
        fontSize: 14,
        fontFamily: "Roboto",
        fontWeight: '600',
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    }
}
)