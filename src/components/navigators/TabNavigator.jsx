import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  UserGroupIcon,
  GlobeAltIcon,
  StarIcon,
  HomeModernIcon,
  InformationCircleIcon,
  MapIcon,
} from 'react-native-heroicons/solid';
const Tab = createBottomTabNavigator();

import DriversScreen from '../screens/drivers/DriversScreen';
import RaceScreen from '../screens/race/RaceScreen';
import TeamScreen from '../screens/team/TeamScreen';

export default function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName={'Drivers'}
      screenOptions={{
        // tabBarActiveTintColor: '#e91e63',
        headerTitleStyle: {color: 'white'},
        tabBarStyle: {backgroundColor: 'black'},
        headerStyle: {
          backgroundColor: '#191919',
        },
      }}>
      <Tab.Screen
        name="Drivers"
        component={DriversScreen}
        options={{
          tabBarLabel: 'Drivers',
          tabBarStyle: {backgroundColor: 'black'},
          tabBarIcon: ({color, size}) => (
            <UserGroupIcon color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Circuit"
        component={RaceScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <GlobeAltIcon color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Equipes"
        component={TeamScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <HomeModernIcon color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Favories"
        component={DriversScreen}
        options={{
          tabBarIcon: ({color, size}) => <StarIcon color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Infos"
        component={DriversScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <InformationCircleIcon color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={DriversScreen}
        options={{
          tabBarIcon: ({color, size}) => <MapIcon color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
}
