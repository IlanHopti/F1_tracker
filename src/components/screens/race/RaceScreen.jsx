import React, {useState, useEffect, useMemo} from 'react';
import {Text, View, StyleSheet, FlatList, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import axios from 'axios';
import RaceCard from './RaceCard';

export default function RaceScreen(props) {
  const [sessions, setSessions] = useState([]);
  const [searchSessions, setSearchSessions] = useState('');

  const {navigation} = props;

  useEffect(() => {
    getSessions();
  }, []);

  const getSessions = async () => {
    try {
      const res = await axios.get(
        'https://api.openf1.org/v1/sessions?session_name=Race',
      );
      setSessions(res.data);
    } catch (error) {
      console.error('ERROR', error);
    }
  };

  const filterSessions = useMemo(
    () =>
      sessions.filter(sessions =>
        sessions.location.toLowerCase().includes(searchSessions.toLowerCase()),
      ),
    [sessions, searchSessions],
  );

  return (
    <SafeAreaView style={styles.screen}>
      <View>
        <Text style={styles.title}>Liste des sessions :</Text>
        <TextInput
          style={styles.searchBar}
          placeholderTextColor={'#fff'}
          placeholder="Rechercher une location de course..."
          onChangeText={setSearchSessions}
          value={searchSessions}
        />
        <FlatList
          data={filterSessions}
          keyExtractor={(item, id) => id.toString()}
          renderItem={({item}) => (
            <RaceCard session={item} navigation={navigation} />
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    backgroundColor: '#121212',
  },
  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#fff',
  },
});
