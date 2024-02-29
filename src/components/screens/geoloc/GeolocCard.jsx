import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function NearRaceCard({session}) {
  /* const navigateToRace = () => {
    navigation.push('RaceDetail', {session});
  };*/

  console.log('geoloc de session item in the list');
  console.log(session);

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{session.adminName1}</Text>
      <Text style={styles.subtitle}>
        {session.lat}, {session.lng}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    color: '#888',
    marginBottom: 5,
  },
});
