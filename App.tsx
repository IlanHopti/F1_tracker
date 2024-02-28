import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './src/components/navigators/AppNavigator';
import RaceScreen from './src/components/screens/race/RaceScreen';

const App = () => {
  return (
    <NavigationContainer>
      <RaceScreen />
    </NavigationContainer>
  );
};

export default App;
