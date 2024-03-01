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
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {getData, storeData, checkUser} from '../../../helpers/authHelper';

export default function RegisterScreen() {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [inputValid, setInputValid] = useState(false);

  const handleRegister = () => {
    const user = {username, password};
    storeData(user, 'user').then(r => {
      console.log('user registered');
      console.log(r);
      navigation.navigate('Login');
    });
  };

  const handleRead = () => {
    getData('user').then(r => {
      console.log('user info');
      console.log(r);
    });
  };

  const handleChangeScreen = () => {
    navigation.navigate('Login');
  };
  return (
    <SafeAreaView style={styles.allContainer}>
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
            placeholder="Nom d'utilisateur"
            style={styles.input}
            onChangeText={setUsername}
          />
          <TextInput
            placeholder="Mot de passe"
            style={styles.input}
            onChangeText={setPassword}
            secureTextEntry={true}
          />

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.confirmButton}
              onPress={() => {
                handleRegister();
              }}>
              <Text>S'inscrire</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.confirmButton}
              onPress={() => {
                handleChangeScreen();
              }}>
              <Text>Déja un compte ? Se connecter</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  allContainer: {
    flex: 1,
    backgroundColor: '#191919',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 30,
    fontWeight: '600',
    paddingBottom: 20,
    color: 'white',
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
    borderColor: 'white',
    backgroundColor: 'lightgrey',
    borderRadius: 10,
    width: '90%',
  },
  notValid: {
    borderColor: 'red',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: '100%',
  },
  confirmButton: {
    padding: 10,
    margin: 10,
    backgroundColor: 'lightblue',
    borderRadius: 10,
  },
});
