import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

export default function RegisterScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <Text>Register navigator</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
});
