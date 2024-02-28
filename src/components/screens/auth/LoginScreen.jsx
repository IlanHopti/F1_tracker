import React from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function LoginScreen(props) {
  const {navigation} = props;

  const handleChangeScreen = () => {
    navigation.push('Register');
  };

  const handleChangeScreenToRace = () => {
    navigation.push('Race');
  };

  return (
    <SafeAreaView style={styles.screen}>
      <Text>Login navigator</Text>
      <Button title={'Go to register'} onPress={() => handleChangeScreen()} />
      <Button title={'Go to race'} onPress={() => handleChangeScreenToRace()} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
});
