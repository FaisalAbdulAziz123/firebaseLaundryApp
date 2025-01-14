import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/Auth/LoginScreen';
import RegisterScreen from '../screens/Auth/RegisterScreen';
import BottomNavigator from './BottomNavigator';
import MainScreen from '../screens/MainScreen'; // Halaman utama Anda


const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Main" component={MainScreen} />

      <Stack.Screen name="Main" component={BottomNavigator} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
