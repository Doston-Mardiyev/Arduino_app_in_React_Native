





import React, { Component } from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, Image, ImageBackground, } from 'react-native';
import { CustomHeader } from '../index'
import { ScrollView } from 'react-native-gesture-handler';

export class Codding extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <CustomHeader title="Simulator" navigation={this.props.navigation} />
                <ScrollView>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ margin: 10, alignItems: 'center', justifyContent: 'center' }}>

                            <Text style={{ fontFamily: "Roboto", fontSize: 16, fontWeight: "bold" }}>
                                Arduino va elektronikani xarajatsiz o'rganishning yo'li bu simulaytorlardan foydalanish bo'lib. Bunday simulatorlardan biri bu TINKERCAD bo'lib o'rganish va foydalanishga qulay bo'libgina qolmay ko'plab funksiyalar va kerakli qurulmalari mavjut.

                         {"\n"}
                            </Text>
                            <Image source={require('../images/Tinker.png')} style={{ justifyContent: 'center', alignItems: 'center', height: 170, width: 340 }} />

                            <Text style={{ fontFamily: "Roboto", fontSize: 16, alignSelf: 'center' }}>

                                Tinkercad - bu 3D dizayn, elektronika va kodlash o'rganishga yordam beradigan bepul onlayn dasturiy vositalar to'plami. Bu simuliyator o'qituvchilar, talabalar, bolalar va dizaynerlarning tasavvuridagi g'oya, dizayn va har qanday narsani yaratish uchun foydalaniladi!
                                {"\n"}
                                {"\n"}
                                TINKERCADning afzalliklari :
                                {"\n"}
                                1- Onlayn: Siz biron bir narsani shaxsiy kompyuteringizga o'rnatishingiz shart emas.
                                {"\n"}
                                2- OpenSoure: hamma uchun bepul, hech qanday litsenziya talab qilinmaydi.
                                {"\n"}
                                3- Simulyator: U sizning loyihangizni tasvirlash va taqlid qilish uchun yaxshi interfeysni taklif qiladi, chunki u Fritizingdan yaxshiroq, ammo uning kichik muammosi paketlar va tarkibiy qismlarning etishmasligi.
                            </Text>
                            <Text style={{ fontFamily: "Roboto", fontSize: 16, fontWeight: "bold" }}>
                                {"\n"}Bu saxifada TINKERCADning Elektronika bo'limini o'rganamiz </Text>
                            <Text style={{ fontFamily: "Roboto", fontSize: 16, }}>
                                {"\n"}
                             Daslab www.tinkercad.com sayitiga kirib "Sign in" tugmasi orqali ro'yxatdan o'tib olamiz, keyin "Circuits" bo'limiga kiramiz "Try Circuits" tugmasini bosamiz va loyhamizni yaratishni boshlaymiz.
                            </Text>
                            <Image source={require('../images/Tinker_try.png')} style={{ justifyContent: 'center', alignItems: 'center', height: 170, width: 340 }} />
                            <Text style={{ fontFamily: "Roboto", fontSize: 16, }}>
                                {"\n"}
                          Simulyatorni o'rganishimizga oson bo'lishi uchun LED chiroqlari bilan ishlashni boshlaymiz.
                          {"\n"}
                          Daslab bizga kerak bo'ladigan qurulmalarni tayorlab olamiz yaniy:
                          {"\n"}
                          1. Arduino Uno R3
                          {"\n"}
                          2. Rezistor (220 ohm).
                          {"\n"}
                          3. Breadboard
                            </Text>
                            <Image source={require('../images/Tinker_circuit.png')} style={{ justifyContent: 'center', alignItems: 'center', height: 170, width: 340 }} />
                            <Text style={{ fontFamily: "Roboto", fontSize: 16, }}>
                                Va rasimda ko'rsatilganidek qurulmalarni joylashtirib kod yozishni boshlaymiz.
                                {"\n"}
                            </Text>

                            <Image source={require('../images/Tinker_run.png')} style={{ justifyContent: 'center', alignItems: 'center', height: 180, width: 340 }} />
                            <Text style={{ fontFamily: "Roboto", fontSize: 16, }}>

                            </Text>
                        </View>

                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}