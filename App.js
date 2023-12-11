import {StatusBar} from 'expo-status-bar';
import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import AllPlaces from './src/Screens/AllPlaces';
import AddPlace from './src/Screens/AddPlace';
import IconButton from './src/Components/UI/IconButton';
import {Colors} from './src/constant/colors';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {backgroundColor: Colors.primary500},
            headerTintColor: Colors.gray700,
            contentStyle: {backgroundColor: Colors.gray700},
          }}>
          <Stack.Screen
            name="AllPlaces"
            component={AllPlaces}
            options={({navigation}) => ({
              title: 'Your Favourite Places',
              headerRight: ({tintColor}) => (
                <IconButton onPress={() => navigation.navigate('AddPlace')} />
              ),
            })}
          />
          <Stack.Screen
            name="AddPlace"
            component={AddPlace}
            options={{title: 'Add a New Place'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
