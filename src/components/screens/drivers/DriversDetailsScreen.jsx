import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Text, StyleSheet, ScrollView} from 'react-native';
import {DriversHelper} from '../../../helpers/apiHelper';
import {useDispatch, useSelector} from 'react-redux';
import {actions as driversActions} from '../../../redux/reducer/driversReducer';
import CareerItem from './components/CareerItem';
import SeasonItem from './components/SeasonItem';
import HeaderItem from './components/HeaderItem';

export default function DriversDetailsScreen({handleDeleteTodo, route}) {
  const {drivers} = useSelector(state => state.drivers);
  const {driversRanking} = useSelector(state => state.driversRanking);
  const dispatch = useDispatch();

  const [driversRankingLoading, setDriversRankingLoading] = useState(true);

  // console.log('driversRanking', driversRanking[1]);
  const findDriver = drivers.find(
    driver => driver?.last_name === route.params.driver?.last_name,
  );

  const findDriverRanking = driversRanking.find(
    driver => driver?.driver?.number === route.params.driver?.driver_number,
  );
  // console.log('findDriverRanking', findDriverRanking);

  const [actualDriver, setActualDriver] = useState(findDriver);
  const detailsDriver = actualDriver?.details;

  useEffect(() => {
    if (!detailsDriver) {
      console.log("j'ajoute");
      DriversHelper.getDriverDetails(actualDriver?.last_name).then(response => {
        // console.log('setting drivers details');
        // console.log('res', response[0]);
        dispatch(
          driversActions.setDrivers(
            drivers.map(driver => {
              if (driver.last_name === actualDriver.last_name) {
                setActualDriver({
                  ...driver,
                  details: response[0],
                });

                return {
                  ...driver,
                  details: response[0],
                };
              }
              return driver;
            }),
          ),
        );
        setDriversRankingLoading(false);
      });
    } else {
      setDriversRankingLoading(false);
      // console.log('detailsDriver', detailsDriver);
    }
  }, [actualDriver]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {driversRankingLoading ? (
          <View>
            <Text style={{color: 'white'}}>Loading</Text>
          </View>
        ) : (
          <>
            <HeaderItem
              actualDriver={actualDriver}
              detailsDriver={detailsDriver}
            />
            <SeasonItem
              findDriverRanking={findDriverRanking}
              actualDriver={actualDriver}
            />
            <CareerItem
              detailsDriver={detailsDriver}
              actualDriver={actualDriver}
            />
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'black',
    flex: 1,
  },
  scrollView: {
    width: '100%',
  },
});
