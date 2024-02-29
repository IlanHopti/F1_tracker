import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {createMaterialBottomTabNavigator} from 'react-native-paper/react-navigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

import DriversScreen from '../screens/drivers/DriversScreen';

export default function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName={'Drivers'}
      screenOptions={
        {
          // tabBarActiveTintColor: '#e91e63',
          // tabBarStyle: {backgroundColor: 'lightgrey'},
        }
      }>
      <Tab.Screen
        name="Drivers"
        component={DriversScreen}
        options={{
          tabBarLabel: 'Drivers',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="access-point-minus"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Drivers2"
        component={DriversScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
