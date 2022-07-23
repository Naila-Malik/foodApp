import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import COLORS from '../../consts/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CartScreen from '../screens/CartScreen';
import DetailScreen from '../screens/DetailsScreen';

const Tab = createBottomTabNavigator();

export default function BottomNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 55,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: COLORS.primary,
      }}>
      <Tab.Screen
        name="HomeScreen"
        tabBarLabel="false"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <AntDesign name="home" size={28} color={color} />
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="LocalMall"
        component={DetailScreen}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialIcons name="local-mall" size={28} color={color} />
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="Search"
        component={DetailScreen}
        options={{
          tabBarIcon: ({color}) => (
            <View
              style={{
                height: 60,
                width: 60,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: COLORS.white,
                borderColor: COLORS.primary,
                borderWidth: 2,
                borderRadius: 30,
                top: -25,
                elevation: 5,
              }}>
              <AntDesign name="search1" size={28} color={color} />
            </View>
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="Favorite"
        component={CartScreen}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialIcons name="favorite" size={28} color={color} />
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="Cart"
        tabBarLabel="false"
        // headerShown="false"
        component={CartScreen}
        options={{
          tabBarIcon: ({color}) => (
            <AntDesign name="shoppingcart" size={28} color={color} />
          ),
        }}></Tab.Screen>
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
