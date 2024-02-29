import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Text, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {actions as driversActions} from '../../../redux/reducer/driversReducer';
import apiHelper from '../../../helpers/apiHelper';

export default function DriversScreen(factory, deps) {
  const {drivers} = useSelector(state => state.drivers);
  const dispatch = useDispatch();

  useEffect(() => {
    if (drivers?.length > 0) {
      console.log('Drivers already set');
      return;
    }

    apiHelper.getDrivers().then(response => {
      console.log('setting drivers');
      console.log(response);
      dispatch(driversActions.setDrivers(response));
    });
  }, [dispatch, drivers]);

  const handlePress = useCallback(() => {
    console.log('Pressed');
    console.log('drivers', drivers);
    drivers.slice(0, 10).map(driver => {
      console.log(driver);
    });
  }, [drivers]);

  return (
    <SafeAreaProvider>
      <Text>Drivers Screen</Text>
      <TouchableOpacity onPress={() => handlePress()}>
        <Text>Click me</Text>
      </TouchableOpacity>
    </SafeAreaProvider>
  );
}
