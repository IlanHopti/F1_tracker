import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './src/components/navigators/AppNavigator';
import RaceDetailScreen from './src/components/screens/race/RaceDetailScreen';
import RaceScreen from './src/components/screens/race/RaceScreen';

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
