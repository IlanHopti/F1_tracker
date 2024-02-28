import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './src/components/navigators/AppNavigator';
import Toast from 'react-native-toast-message';
const App = () => {
  return (
    <>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
      <Toast />
    </>
  );
};

export default App;
