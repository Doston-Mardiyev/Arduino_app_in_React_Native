import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, Animated, ActivityIndicator, } from 'react-native';
import { Actions } from 'react-native-router-flux';


/* Logo */
import Logo from '../images/Logo2.png';

const switchToAuth = () => {
    Actions.replace('auth')
};

export class EnterScreen extends Component {
    state = {
        LogoAnime: new Animated.Value(0),
        LogoText: new Animated.Value(0),
        loadingSpinner: false,
    };

    componentDidMount() {
        const { LogoAnime, LogoText } = this.state;
        Animated.parallel([
            Animated.spring(LogoAnime, {
                toValue: 1,
                tension: 10,
                friction: 2,
                duration: 1000,
            }).start(),

            Animated.timing(LogoText, {
                toValue: 1,
                duration: 2000,
            }),
        ]).start(() => {
            this.setState({
                loadingSpinner: false,
            });

            setTimeout(switchToAuth, 2500);
            setInterval(() => { this.props.navigation.navigate('HomeApp') }, 1000)
        });
    }


    render() {
        return (
            <View style={styles.container}>
                <Animated.View
                    style={{
                        opacity: this.state.LogoAnime,
                        top: this.state.LogoAnime.interpolate({
                            inputRange: [0, 1],
                            outputRange: [80, 0],
                        }),
                    }}>
                    <Image source={Logo} style={{ width: 150, height: 100 }} />

                    {this.state.loadingSpinner ? (
                        <ActivityIndicator
                            style={{
                                position: 'absolute',
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                            size="large"
                            color="#5257f2"
                        />
                    ) : null}
                </Animated.View>
                <Animated.View style={{ opacity: this.state.LogoText }}>
                    <Text style={styles.logoText}> Darsliklar... </Text>
                </Animated.View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00979D',
        justifyContent: 'center',
        alignItems: 'center',
    },

    logoText: {
        color: '#FFFFFF',
        fontFamily: 'GoogleSans-Bold',
        fontSize: 30,
        marginTop: 29.1,
        fontWeight: '400',
    },
});