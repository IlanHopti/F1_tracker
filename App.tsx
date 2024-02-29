import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './src/components/navigators/AppNavigator';
import Toast from 'react-native-toast-message';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
      <Toast />
    </Provider>
  );
};

export default App;
