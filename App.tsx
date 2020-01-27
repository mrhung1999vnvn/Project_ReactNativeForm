import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { NavigationNativeContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HeaderComponent from './components/Header';
import SignInScreen from './screens/SignInScreen';
import Colors from './styles/Colors';
import SignUpScreen from './screens/SignUpScreen';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans-bold': require('./assets/font/OpenSans-Bold.ttf'),
    'open-sans-light': require('./assets/font/OpenSans-Light.ttf'),
    'open-sans-regular': require('./assets/font/OpenSans-Regular.ttf'),
    'open-sans-semibol': require('./assets/font/OpenSans-Semibold.ttf'),
    'josefin-sans-bold': require('./assets/font/josefin-sans/JosefinSans-Bold.ttf'),
    'josefin-sans-light': require('./assets/font/josefin-sans/JosefinSans-Light.ttf'),
    'josefin-sans-regular': require('./assets/font/josefin-sans/JosefinSans-Regular.ttf'),

  });
}






export default function App() {
  const [dataLoad, setDataLoad] = useState(false);
  const [screen, setSreen] = useState(false);




  const Signin = props => {
    return (
      <View style={style.container}>
        <HeaderComponent headerText={'Sign In'}></HeaderComponent>
        <SignInScreen></SignInScreen>
      </View>
    );
  };

  const Signup = props => {
    return (
      <View style={style.container}>
        <HeaderComponent headerText={'Create Account'}></HeaderComponent>
        <SignUpScreen></SignUpScreen>
      </View>
    );
  }

  //Navigate to another screen
  const Screen=(value)=>{
    console.log('huhu');
    setSreen(value);
  }

  var content = (<SignInScreen Screen={Screen}></SignInScreen>);
  var title = (<HeaderComponent headerText={'Sign In'}></HeaderComponent>);

  if (!screen) {
    content = <SignInScreen Screen={Screen}></SignInScreen>
    title = <HeaderComponent headerText={'Sign In'}></HeaderComponent>
  }
  else {
    content = (<SignUpScreen Screen={Screen}></SignUpScreen>);
    title = <HeaderComponent headerText={'Create Account'}></HeaderComponent>
  }

  // const Stack=createStackNavigator();
  if (!dataLoad) {
    return <AppLoading startAsync={fetchFonts} onFinish={() => setDataLoad(true)} onError={(err) => console.log(err)}></AppLoading>;
  }
  return (
    <View style={style.container}>
      {title}
      {content}
    </View>
    // <NavigationNativeContainer>
    //   <Stack.Navigator initialRouteName="SignUp">
    //     <Stack.Screen name="SignIn" component={Signin} />
    //     <Stack.Screen name="SignUp" component={Signup} />
    //   </Stack.Navigator>
    // </NavigationNativeContainer>

  );
}


const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary
  }
});
