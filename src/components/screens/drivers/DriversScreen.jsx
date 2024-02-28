import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Text} from 'react-native';

export default function DriversScreen() {
  return (
    <SafeAreaProvider>
      <Text>Drivers Screen</Text>
    </SafeAreaProvider>
  );
}
