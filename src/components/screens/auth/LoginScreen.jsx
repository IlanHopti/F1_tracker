import React, {useCallback, useEffect, useState} from 'react';

import {
  Button,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function LoginScreen() {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [inputValid, setInputValid] = useState(false);
  const handleChangeScreen = () => {
    navigation.navigate('Home');
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Inscription</Text>
          <Image
            source={{
              uri: 'https://static-00.iconduck.com/assets.00/profile-circle-icon-512x512-zxne30hp.png',
            }}
            style={{
              width: 100,
              height: 100,
            }}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Nom"
            style={styles.input}
            onChangeText={setUsername}
          />
          <TextInput
            placeholder="Mot de passe"
            style={styles.input}
            onChangeText={setPassword}
            secureTextEntry={true}
          />

          <Button
            title={'Envoyer'}
            onPress={() => {
              // checkPassword();
              handleChangeScreen();
            }}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 30,
    fontWeight: '600',
    paddingBottom: 20,
  },
  inputContainer: {
    flex: 3,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  input: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'lightgrey',
    borderRadius: 10,
    width: '90%',
  },
  notValid: {
    borderColor: 'red',
  },
});
