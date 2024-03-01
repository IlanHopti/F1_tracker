import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {FlatList, Text, TextInput, View, StyleSheet} from 'react-native';
import DriversItem from '../drivers/DriversItem';
import * as asyncStorageHelper from '../../../helpers/asyncStorageHelper';
import {useFocusEffect} from '@react-navigation/native';

export default function FavoritesScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [driversLoading, setDriversLoading] = useState(false);
  const [drivers, setDrivers] = useState([]);
  const [favKeys, setFavKeys] = useState([]);

  useFocusEffect(
    useCallback(() => {
      const fetchData = async () => {
        const fav = await asyncStorageHelper.getKeys();
        setFavKeys(fav.filter(f => f !== 'user'));
      };
      fetchData();
    }, []),
  );

  console.log('favKeys', favKeys);

  useEffect(() => {
    asyncStorageHelper.getMultiple(favKeys).then(favDrivers => {
      setDrivers(favDrivers);
    });
  }, [favKeys]);

  console.log('driversdddd', drivers);

  const filterDrivers = useMemo(() => {
    // sort by team_name
    return drivers
      ?.filter(driver => {
        return driver?.full_name
          ?.toLowerCase()
          ?.includes(searchQuery.toLowerCase());
      })
      ?.sort((a, b) => {
        return b?.team_name?.localeCompare(a?.team_name);
      });
  }, [searchQuery, drivers]);

  return (
    <SafeAreaProvider style={styles.screenComponent}>
      {driversLoading ? (
        <Text style={styles.loading}>Loading</Text>
      ) : (
        <>
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholderTextColor={'white'}
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholder="Rechercher un pilote"
            />
          </View>
          <View style={styles.list}>
            <FlatList
              data={filterDrivers}
              renderItem={({item}) => <DriversItem driver={item} />}
              keyExtractor={item => item?.driver_number?.toString()}
              style={{
                width: '100%',
              }}
            />
          </View>
        </>
      )}
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
});
