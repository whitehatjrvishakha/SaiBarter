import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import  LoginSreen from './screens/loginSreen';
import SignUp from './screens/SignUp';
import ThirdScreen from './screens/ThirdScreen'

export default function App() {
  return (
    <View style={styles.container}>
      

   <AppContainer />
    

    </View>
  );
}




const switchNavigator = createSwitchNavigator({
 LoginSreen:{screen: LoginSreen},
  ThirdScreen:{screen: ThirdScreen}
})

const AppContainer =  createAppContainer(switchNavigator);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});