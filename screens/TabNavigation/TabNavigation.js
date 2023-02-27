import * as React from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Home from "../DrawerScreens/Home";
import More from "../DrawerScreens/More";
import { signOut } from "firebase/auth";
import FriendScreen from '../FriendScreen';
import { AntDesign } from '@expo/vector-icons';
import NotificationsScreen from '../NotificationsScreen';
import MessagesScreen from '../MessagesScreen';

import { auth } from "../../config";

export const DetailsScreen = () => {
  const handleLogout = () => {
    signOut(auth).catch((error) => console.log("Error logging out: ", error));
  };
  return (
    <View style={styles.container}>
      <Button title="Sign Out" onPress={handleLogout} />
    </View>
  );
};

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Details" component={More} />
    </HomeStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "HomeList") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "ios-list" : "ios-list-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="HomeList"
        component={HomeStackScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={35} color="#ff00ff" />
          ),
          headerRight: () => (
            <Button
              onPress={() => alert("This is a button!")}
              title="Info"
              color="#00cc00"
            />
          ),
        }}
      />
      <Tab.Screen  options={{
      tabBarLabel: 'message',
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
      tabBarLabel: 'Requests',
      tabBarIcon: ({ color, size }) => (
        <AntDesign name="contacts" size={35} color="#ff00ff" />
      ),
    }} 
    name="FriendScreen" component={FriendScreen} />
      <Tab.Screen
        name="Settings"
        component={More}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="profile" size={35} color="#ff00ff" />
          ),
        }}
      />
    
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
  },
});
