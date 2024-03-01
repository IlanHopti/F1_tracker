import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import TabNavigator from './TabNavigator';
import DriversDetailsScreen from '../screens/drivers/DriversDetailsScreen';

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName={'Register'}>
      <Stack.Screen
        options={{
          headerShown: false,
          gestureEnabled: false,
          headerStyle: {
            backgroundColor: '#191919',
          },
        }}
        name="Home"
        component={TabNavigator}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        // options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        // options={{headerShown: false}}
        component={RegisterScreen}
      />
      <Stack.Screen
        name="DriversDetails"
        options={{
          headerStyle: {
            backgroundColor: '#191919',
          },
          headerTitleStyle: {color: 'white'},
          headerTitle: '',
        }}
        component={DriversDetailsScreen}
      />
    </Stack.Navigator>
  );
}
