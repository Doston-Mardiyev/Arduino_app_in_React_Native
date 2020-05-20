import * as React from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer';

import { CustomHeader, CustomDrawerContent } from './src'
import { HomeScreen, HomeScreenDetail, EnterScreen, } from './src/tab'
import { Dasturlash, Codding, DasturHaqida, Contact, Policy, ArduinoIDE } from './src/drawer'
import { Projects, LessonLED, SecondLesson } from './src/Projects_screen'
//import { Contact } from './src/drawer/Contact';



const Tab = createBottomTabNavigator();

const navOptionHandler = () => ({
  headerShown: false
})

const StackHome = createStackNavigator()

function HomeStack({ navigation, route }) {
  if (route.state && route.state.routeNames[route.state.index] === "HomeDetail") {
    navigation.setOptions({ tabBarVisible: false })
  } else {
    navigation.setOptions({ tabBarVisible: true })
  }
  return (
    <StackHome.Navigator initialRouteName="Home">
      <StackHome.Screen name="Home" component={HomeScreen} options={navOptionHandler} />
      <StackHome.Screen name="HomeDetail" component={HomeScreenDetail} options={navOptionHandler} />
      <StackHome.Screen name="Dasturlash" component={Dasturlash} options={navOptionHandler} />
      <StackHome.Screen name="Loyhalar" component={LessonStack} options={navOptionHandler} />
      <StackHome.Screen name="Simulator" component={Codding} options={navOptionHandler} />
      <StackHome.Screen name="ArduinoIDE" component={ArduinoIDE} options={navOptionHandler} />
    </StackHome.Navigator>
  )
}



const StackLesson = createStackNavigator()

function LessonStack() {
  return (
    <StackLesson.Navigator initialRouteName="Loyhalar">
      <StackLesson.Screen name="Loyhalar" component={Projects} options={navOptionHandler} />
      <StackLesson.Screen name="LessonLED" component={LessonLED} options={navOptionHandler} />
      <StackLesson.Screen name="SecondLesson" component={SecondLesson} options={navOptionHandler} />
    </StackLesson.Navigator>
  )
}


const Drawer = createDrawerNavigator();

function DrawerNavigator({ navigation }) {

  return (

    <Drawer.Navigator initialRouteName="MenuTab" drawerContent={() => <CustomDrawerContent navigation={navigation} />}>
      <Drawer.Screen name="MenuTab" component={HomeStack} />
      <Drawer.Screen name="DasturHaqida" component={DasturHaqida} />
      <Drawer.Screen name="Contact" component={Contact} />
      <Drawer.Screen name="Policy" component={Policy} />
    </Drawer.Navigator>

  )
}

// const StackMenu = createStackNavigator()

// function MenuStack() {
//   return (
//     <StackMenu.Navigator initialRouteName="Menu">
//       <StackMenu.Screen name="Menu" component={Menu} options={navOptionHandler} />
//       <StackMenu.Screen name="HomeApp" component={DrawerNavigator} options={navOptionHandler} />
//       <StackMenu.Screen name="Loyhalar" component={LessonStack} options={navOptionHandler} />
//     </StackMenu.Navigator>
//   )
// }



const StackApp = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <StackApp.Navigator initialRouteName="Login">
        <StackApp.Screen name="HomeApp" component={DrawerNavigator} options={navOptionHandler} />
        <StackApp.Screen name="Login" component={EnterScreen} options={navOptionHandler} />
        {/* <StackApp.Screen name="Menu" component={MenuStack} options={navOptionHandler} /> */}
      </StackApp.Navigator>
    </NavigationContainer>


  );
}