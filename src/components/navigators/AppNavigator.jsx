import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import TabNavigator from './TabNavigator';
import DriversDetailsScreen from '../screens/drivers/DriversDetailsScreen';
import RaceDetailScreen from '../screens/race/RaceDetailScreen';
import TeamDetails from '../screens/team/TeamDetails';

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
        options={{
          headerStyle: {
            backgroundColor: '#191919',
          },
          headerTintColor: 'white',
        }}
      />
      <Stack.Screen
        name="Register"
        options={{
          headerStyle: {
            backgroundColor: '#191919',
          },
          headerTintColor: 'white',
          headerBackTitle: 'Se connecter',
        }}
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
          headerTintColor: 'white',
          headerBackTitle: 'Pilotes',
        }}
        component={DriversDetailsScreen}
      />
      <Stack.Screen
        name="RaceDetail"
        component={RaceDetailScreen}
        options={{
          headerStyle: {
            backgroundColor: '#191919',
          },
          headerTitleStyle: {color: 'white'},
          headerTitle: '',
          headerTintColor: 'white',
          headerBackTitle: 'Circuits',
        }}
      />
      <Stack.Screen
        name="TeamDetails"
        component={TeamDetails}
        options={{
          headerStyle: {
            backgroundColor: '#191919',
          },
          headerTitleStyle: {color: 'white'},
          headerTitle: '',
          headerTintColor: 'white',
          headerBackTitle: 'Équipes',
        }}
      />
    </Stack.Navigator>
  );
}
