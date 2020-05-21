import React, { Component } from 'react'
import { Text, View, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import { CustomHeader } from '../index'

export class Codding extends Component {
    render() {
        return (
            <SafeAreaView>
                <CustomHeader title="Simulator" navigation={this.props.navigation} />
                <ScrollView>
                    <View>

                        <Text>Arduino va elektronikani xarajatsiz o'rganishning yo'li bu simulaytorlardan foydalanish bo'lib. Bunday simulatorlardan biri bu TINKERCAD bo'lib o'rganish va foydalanishga qulay bo'libgina qolmay ko'plab funksiyalar va kerakli qurulmalari mavjut. </Text>

                        <Image style={{ height: '100%', width: '100%' }} resizeMode={'center'} source={require('../images/Tinker.png')} />

                    </View>

                </ScrollView>



            </SafeAreaView>
        );
    }
}