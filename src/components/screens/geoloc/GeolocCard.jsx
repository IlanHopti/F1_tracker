import React from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';

export default function NearRaceCard({session}) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{session.name}</Text>
      <Text style={styles.subtitle}>
        {session.city}, {session.country}
      </Text>
      <Image source={{uri: session?.image}} style={styles.logo} />
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
    marginHorizontal: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black',
  },
  subtitle: {
    fontSize: 12,
    color: 'black',
    marginBottom: 5,
  },
  logo: {
    width: 130,
    height: 80,
    padding: 10,
    margin: 10,
  },
});
