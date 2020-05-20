import React, { Component } from 'react'
import { Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView, Share, } from 'react-native';


export class CustomHeader extends Component {

    onShare = async () => {

        const result = await Share.share({
            title: "Robota texnika ishqivozlari uchun yangilik O'zbek tilidagi Arduino Darsliklar",
            message:
                'https://reactnative.dev/docs/share', //Android
            url: 'https://reactnative.dev/docs/share', //IOS
        });
    }

    render() {

        let { navigation, isHome, title } = this.props

        return (

            <View style={{ flexDirection: 'row', height: 50, backgroundColor: '#00979D', }}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    {
                        isHome ?
                            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                                <Image style={{ width: 30, height: 30, marginLeft: 5 }} source={require('./images/menu.png')} resizeMode="contain" />
                            </TouchableOpacity>

                            :
                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.goBack()}>
                                <Image style={{ width: 25, height: 25, marginLeft: 5, }} source={require('./images/back.png')} resizeMode="contain" />
                                {/* <Text style={{ color: '#fff', fontSize: 14, fontWeight: "bold" }}>Back</Text> */}
                            </TouchableOpacity>


                    }
                </View>

                <View style={{ flex: 1.5, justifyContent: 'center' }}>
                    <Text style={{ textAlign: 'center', color: '#fff', fontSize: 16, fontWeight: "bold" }}>{title}</Text>
                </View>


                <View style={{ flex: 1 }}>
                    <TouchableOpacity onPress={this.onShare} title="Share" style={{ flexDirection: 'row', alignItems: 'center' }} >
                        <Image source={require('./images/Share_48px.png')} style={{ height: 30, width: 30, marginLeft: 60, top: 10 }} resizeMode="contain" />
                    </TouchableOpacity>
                </View>


            </View>
        )
    }
}

