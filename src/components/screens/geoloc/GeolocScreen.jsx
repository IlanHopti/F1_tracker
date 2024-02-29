import React, {useCallback, useEffect, useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Geolocation from '@react-native-community/geolocation';
import GeolocHelper from '../../../helpers/GeolocHelper';
import NearRaceCard from './GeolocCard';
import {
  Text,
  PermissionsAndroid,
  TouchableOpacity,
  View,
  StyleSheet,
  Platform,
  FlatList,
} from 'react-native';

export default function GeolocScreen() {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [data, setData] = useState();

  const Permission = useCallback(async () => {
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
  }, [getCurrentLocation]);

  useEffect(() => {
    Permission();
  }, [Permission]);

  const getCurrentLocation = useCallback(() => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setCurrentLocation({latitude, longitude});
        loadData(latitude, longitude);
      },
      error => alert('Error', error.message),
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 1000},
    );
  }, [loadData]);

  const loadData = useCallback(async (latitude, longitude) => {
    GeolocHelper.GetGeoloc(latitude, longitude).then(res => {
      setData(res.postalCodes);
    });
  }, []);

  return (
    <SafeAreaProvider>
      <Text>Geolocalisation Screen</Text>
      <View>
        <Text>
          Latitude: {currentLocation ? currentLocation.latitude : 'Loading...'}
        </Text>
        <Text>
          Longitude:{' '}
          {currentLocation ? currentLocation.longitude : 'Loading...'}
        </Text>
      </View>
      <TouchableOpacity onPress={Permission}>
        <Text>Location</Text>
      </TouchableOpacity>
      <FlatList
        data={data}
        keyExtractor={(item, id) => id.toString()}
        renderItem={({item}) => <NearRaceCard session={item} />}
      />
    </SafeAreaProvider>
  );
}
