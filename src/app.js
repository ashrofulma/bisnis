import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Beranda from './pages/Beranda';
import login from './pages/Login';
import pembayaran from './pages/pembayaran';
import kontak from './pages/kontak';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();



function MyTabs() {
    return (
      <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={{
          tabBarActiveTintColor: '#e91e63',
        }}
      >
        <Tab.Screen
          name="Beranda"
          component={Beranda}
          options={{
            tabBarLabel: 'Beranda',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Login"
          component={login}
          options={{
            tabBarLabel: 'Login',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="login" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="pembayaran"
          component={pembayaran}
          options={{
            tabBarLabel: 'pembayaran',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="registered-trademark" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="kontak"
          component={kontak}
          options={{
            tabBarLabel: 'kontak',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Bisnis" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App

const styles = StyleSheet.create({})