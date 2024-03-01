import React, {useEffect, useMemo, useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {FlatList, Text, TextInput, View, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {actions as driversActions} from '../../../redux/reducer/driversReducer';
import {actions as driversRankingActions} from '../../../redux/reducer/driversRankingReducer';
import {DriversHelper} from '../../../helpers/apiHelper';
import DriversItem from './DriversItem';

export default function DriversScreen(factory, deps) {
  const [searchQuery, setSearchQuery] = useState('');

  const {drivers} = useSelector(state => state.drivers);
  const {driversRanking} = useSelector(state => state.driversRanking);
  const dispatch = useDispatch();

  const [driversLoading, setDriversLoading] = useState(false);

  useEffect(() => {
    if (drivers?.length === 0) {
      setDriversLoading(true);
      console.log('Setting drivers');
      try {
        DriversHelper.getDrivers().then(response => {
          // console.log(response);
          dispatch(driversActions.setDrivers(response));
          setDriversLoading(false);
        });
      } catch (error) {
        setDriversLoading(false);
        console.log('error', error);
      }
    }

    if (driversRanking?.length === 0) {
      try {
        DriversHelper.getDriversRanking().then(response => {
          // console.log('Setting drivers ranking');
          dispatch(driversRankingActions.setDriversRanking(response));
        });
      } catch (e) {
        console.log('error', e);
      }
    }
  }, [dispatch, drivers, driversRanking]);

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
});
