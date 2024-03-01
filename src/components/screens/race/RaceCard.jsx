import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import axios from 'axios';

export default function RaceCard({session, navigation}) {
  const [circuit, setCircuit] = useState([]);

  const navigateToRace = () => {
    navigation.push('RaceDetail', {session});
  };

  useEffect(() => {
    // getCircuit();
  }, []);

  const getCircuit = async () => {
    try {
      const config = {
        headers: {
          'x-rapidapi-key': process.env.API_KEY,
          'x-rapidapi-host': process.env.API_HOST,
        },
      };
      const res = await axios.get(
        'https://v1.formula-1.api-sports.io/circuits?search=' +
          session.location,
        config,
      );
      console.log(res.data);
      setCircuit(res.data);
    } catch (error) {
      console.error('ERROR', error);
    }
  };

  return (
    <TouchableOpacity onPress={navigateToRace} style={styles.card}>
      <Text style={styles.title}>
        {session.location}, {session.country_name}
      </Text>
      {/* <View style={styles.info}>
                <Text style={styles.text} >Distance de course: {circuit.race_distance}</Text>
                <Image
                    source={{ uri: circuit.image }}
                    style={styles.image}
                />
            </View> */}
      <Text style={styles.text}>Date: {session.date_start}</Text>
      <Text style={styles.text}>Heure de début: {session.date_start}</Text>
      <Text style={styles.text}>Heure de fin: {session.date_end}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#191919',
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
    color: '#fff',
  },
  subtitle: {
    marginBottom: 5,
  },
  info: {
    marginTop: 10,
    borderTopWidth: 1,
    paddingTop: 10,
    borderTopColor: '#888',
    color: '#fff',
  },
  image: {
    width: 200,
    height: 100,
    resizeMode: 'cover',
  },
  text: {
    color: '#fff',
  },
});
