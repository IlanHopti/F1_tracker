import React, {useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import Geolocation from '@react-native-community/geolocation';

import {
  Text,
  PermissionsAndroid,
  TouchableOpacity,
  View,
  StyleSheet,
  Platform,
} from 'react-native';

export default function GeolocScreen() {
  const Permission = async () => {
    if (Platform.OS === 'ios') {
      getCurrentLocation();
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Cool Photo App Location Permission',
            message: 'Cool Photo App needs access to your Location ',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('You can use the Location');
          getCurrentLocation();
        } else {
          console.log('Location permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };

  const [currentLocation, setCurrentLocation] = useState(null);

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setCurrentLocation({latitude, longitude});
        console.log(latitude, longitude);
      },
      error => alert('Error', error.message),
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 1000},
    );
  };

  return (
    <SafeAreaProvider>
      <Text>Geolocalisation Screen</Text>
      <View>
        <Text>
          Latitude: {currentLocation ? currentLocation.latitude : 'Loading...'}
        </Text>
        <Text>
          Longitude:
          {currentLocation ? currentLocation.longitude : 'Loading...'}
        </Text>
      </View>
      <TouchableOpacity style onPress={Permission}>
        <Text>Location</Text>
      </TouchableOpacity>
    </SafeAreaProvider>
  );
}
