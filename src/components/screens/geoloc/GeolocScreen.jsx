import React, {useCallback, useEffect, useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Geolocation from '@react-native-community/geolocation';
import {GeolocHelper, FormulaHelper} from '../../../helpers/apiHelper';
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
  const [distanceBetweenRace, setDistanceBetweenRace] = useState([]);
  const [sortedDist, setSortedDist] = useState([]);

  useEffect(() => {
    console.log('useeffect');
    Permission();
  }, [Permission]);

  const Permission = useCallback(async () => {
    console.log('perm');
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
          getCurrentLocation();
        } else {
          console.log('Location permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    }
  }, [getCurrentLocation]);

  const [currentLocation, setCurrentLocation] = useState(null);

  const getCurrentLocation = useCallback(() => {
    console.log('getcurrentloc');
    Geolocation.getCurrentPosition(
      position => {
        console.log('position');

        const {latitude, longitude} = position.coords;
        setCurrentLocation({latitude, longitude}); //valeur pour afichage
        const myLocation = {lat: latitude, long: longitude};
        getMyCountry(myLocation);
      },
      error => alert('Error', error.message),
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 1000},
    );
  }, [getMyCountry]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getMyCountry = async myLocation => {
    console.log('getmycountry');

    var distanceBetweenSecond = [];
    setDistanceBetweenRace([]);
    // recuperer mon nom de pays avec lat et long
    const resCountry = await GeolocHelper.GetGeoloc(myLocation);
    var myCountry = {
      lat: resCountry.postalCodes[0].lat,
      long: resCountry.postalCodes[0].lng,
    };

    // recuperer tous les pays ou il y a un circuit
    const resRaces = await FormulaHelper.GetRaces();
    resRaces.forEach(async element => {
      if (element.competition.location.country != null) {
        const resLoc = await GeolocHelper.GetGeolocByName(
          element.competition.location.country,
        );
        if (resLoc.postalCodes && resLoc.postalCodes[0] !== undefined) {
          const distBetween = {
            country: element.competition.location.country,
            dist: [
              myCountry.lat - resLoc.postalCodes[0].lat,
              myCountry.long - resLoc.postalCodes[0].lng,
            ],
            image: element.image,
            name: element.name,
            city: element.competition.location.city,
          };
          setDistanceBetweenRace([...distanceBetweenSecond, distBetween]);
        }
      }
    });
  };

  useEffect(() => {
    const sortedList = [...distanceBetweenRace].sort(compareVectors);
    setSortedDist(prevSortedDist => [...prevSortedDist, ...sortedList]);
  }, [distanceBetweenRace]);

  const compareVectors = (a, b) => {
    console.log('compare vector');
    const distanceA = Math.sqrt(a.dist[0] ** 2 + a.dist[1] ** 2); // Calcul de la distance pour le vecteur a
    const distanceB = Math.sqrt(b.dist[0] ** 2 + b.dist[1] ** 2); // Calcul de la distance pour le vecteur b
    const result = distanceA - distanceB;
    console.log(result + ' ' + a.country + ' ' + b.country);
    return result; // Trie les vecteurs en fonction de leur distance
  };

  return (
    <SafeAreaProvider style={styles.screenComponent}>
      <View>
        <Text style={styles.text}>
          Latitude: {currentLocation ? currentLocation.latitude : 'Loading...'}
        </Text>
        <Text style={styles.text}>
          Longitude:{' '}
          {currentLocation ? currentLocation.longitude : 'Loading...'}
        </Text>
      </View>
      <FlatList
        data={sortedDist}
        keyExtractor={(item, id) => id.toString()}
        renderItem={({item}) => <NearRaceCard session={item} />}
      />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  screenComponent: {
    backgroundColor: '#191919',
  },
  list: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchInput: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    color: 'white',
  },
  addTodoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  listItem: {
    padding: 10,
    margin: 10,
    backgroundColor: 'lightgrey',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    flex: 1,
  },
  loading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});
