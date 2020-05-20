import React, { Component } from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, Image, ImageBackground, } from 'react-native';
import { CustomHeader } from '../index'
import { ScrollView } from 'react-native-gesture-handler';
import { Paragraph } from 'react-native-paper';

export class HomeScreenDetail extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <CustomHeader title="Home Detail" navigation={this.props.navigation} />
                <ScrollView>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ margin: 10, alignItems: 'center', justifyContent: 'center' }}>

                            <Text style={{ fontFamily: "Roboto", fontSize: 16, fontWeight: "bold" }}>

                                Siz bu bo’limda Arduino haqida to’liq malumotlar olishingiz va bundan tashqari Arduinodan foydalanish va bundan tashqari kod yozishni o’rganib uni Arduinoga yuklab o’zingizning dastlabki avtomatlashgan kichik qurulmangizni yaratishingiz mumkun.
                         {"\n"}
                            </Text>

                            <Text style={{ fontFamily: "Roboto", fontSize: 16, alignSelf: 'center' }}>
                                Arduino — professional va havaskor robototexnika ishqibozlari uchun dasturiy va texnik taminotlar yigʻindisi. Arduino mutloq ochiq arhitektura. Undagi barcha loyihalar qismlari (Asosan dasturiy taminot) ochiq tarqatiladi. U oʻzining platasi va IDE (Integrated Development Environment) dasturlash muhiti ga ega. Unga qo’shimcha qurilma va sensorlar qo’shish orqli imkoniyatlarini kengaytirib har hil turdagi  avotmatlashgan qurilma va roborlar yaratish mumkun bo’lgan kichik mo’jiza.
                                Arduino platalarida Atmel AVR mikrokontrolleri yoki Atmel ARM mikrokontrolleri ishlatiladi va ba'zi versiyalarda u USB interfeysiga ega. Bundan tashqari, ular oltita yoki undan ko'p analog kirish pinlari va o'n to'rt yoki undan ko'p raqamli kirish / chiqish (I / O) pinlariga ega, ular sensorlar, aktuatorlar va boshqa qo’shimcha qo’shib mikrokontrollerning imkoniyatlarini yanada kengaytirishda foydalaniladi.
                                {"\n"}
                            </Text>
                            <Image source={require('../images/Arduino_type.jpg')} style={{ justifyContent: 'center', alignItems: 'center', height: 200, width: 380 }} />

                            <Text style={{ fontFamily: "Roboto", fontSize: 16, }}>
                                {"\n"}
                                Rasimda ko’rib turganigizdek Aarduinoning turlari juda ko’p va shunga yarasha ularning ham vazifalari kengayib turlicha qo’shimchalar qo’shilib imkoniyatlari yanada kuchaytirilib borilmoqda.
                                Ayrimlarining kirish/ chiqish (I/O) pinlari soni ko’pligi va xotirasi kengligi bilan ajralib tursa boshqalari kichik va ishlartishga qulayligi bilan farqlanib turadi. Bundan tashqari Wi-Fi qurilmalar bilan jihozlangan va Internetga ulanishga mo’ljallangan turlariham.
                                Arduino (IDE) dasturi va uni Windows OS ga o’rnatish
                                Arduino dasturlash uchun ishlatiladigan dastur Arduino IDE bo’lib u turlihil Operation Sistema (OS) yani Windows, Mac va Linux OS larga o’rnatish va ishlatish oson. Bundan tashqari IDE ga qo’shimcha kutubxonalarni qo’shish orqali seriyali portlar va har xil turdagi displeylar kabi tashqi vositalardan foydalanish va imkoniyatlarini yanada kuchaytirish mumkun.
                                Arduino C++ tliga asoslanib soddalashtirilgan dasturlash tilidan foydalaniladi.
                                Arduino (IDE) dasturini o’rnatish

                                Dasturlash
                        </Text>
                        </View>

                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}