import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {createMaterialBottomTabNavigator} from 'react-native-paper/react-navigation';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

import DriversScreen from '../screens/drivers/DriversScreen';

export default function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName={'Drivers'}
      screenOptions={
        {
          // tabBarActiveTintColor: '#e91e63',
        }
      }>
      <Tab.Screen name="Drivers" component={DriversScreen} />
      <Tab.Screen name="Drivers2" component={DriversScreen} />
    </Tab.Navigator>
  );
}
