import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './Screens/Login';
import Splash from './Screens/Splash';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Splash" component={Splash} options = {{headerShown: false}} />
        <Stack.Screen name="Login" component={Login} options = {{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator

const styles = StyleSheet.create({

})