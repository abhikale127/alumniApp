import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MoviewDetailsScreen from "../screens/DrawerScreens/movieScreen";
import TabNavigation from "../screens/TabNavigation/TabNavigation";
import EditProfileScreen from "../screens/DrawerScreens/EditProfileScreen";
import { NavigationContainer } from '@react-navigation/native'
// import React from 'react'
import FriendScreen from '../screens/FriendScreen';
import MessagesScreen from '../screens/MessagesScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import HomeScreen from '../screens/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={TabNavigation} />
      <Stack.Screen
        name="MoviewDetailsScreen"
        component={MoviewDetailsScreen}
      />
      <Stack.Screen name="editProfile" component={EditProfileScreen} />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();
const nav = () => (
  <NavigationContainer>
  <Tab.Navigator  screenOptions={{headerShown: false}}>
  <Tab.Screen  options={{
      tabBarLabel: 'Home',
      tabBarIcon: ({ color, size }) => (
        <AntDesign name="home" size={35} color="#ff00ff" />
      ),
    }} name="Home" component={HomeScreen}  />
  <Tab.Screen options={{
      tabBarLabel: 'Contacts',
      tabBarIcon: ({ color, size }) => (
        <AntDesign name="contacts" size={35} color="#ff00ff" />
      ),
    }} 
    name="FriendScreen" component={FriendScreen} />
  <Tab.Screen  options={{
      tabBarLabel: 'Contacts',
      tabBarIcon: ({ color, size }) => (
        <AntDesign name="message1" size={35} color="#ff00ff" />
      ),
    }} 
    name="Messages" component={MessagesScreen}  />
  <Tab.Screen options={{
      tabBarLabel: 'Notification',
      tabBarIcon: ({ color, size }) => (
        <AntDesign name="notification" size={35} color="#ff00ff" />
      ),
    }} name="Notifications" component={NotificationsScreen} />
    <Tab.Screen options={{
      tabBarLabel: 'Profile',
      tabBarIcon: ({ color, size }) => (
        <AntDesign name="notification" size={35} color="#ff00ff" />
      ),
    }} name="editProfile" component={EditProfileScreen} />
</Tab.Navigator>
</NavigationContainer>
 )
export default AppStack
