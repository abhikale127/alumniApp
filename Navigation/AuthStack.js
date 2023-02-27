import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  LoginScreen,
  SignupScreen,
  ForgotPasswordScreen,
} from "../screens/loginRegister";
import SplashScreen from "../screens/landingScreen/splashScreen";

const Stack = createNativeStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
    </Stack.Navigator>
  );
};
