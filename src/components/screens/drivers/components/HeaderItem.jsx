import React, {useEffect, useState, useCallback} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {StarIcon} from 'react-native-heroicons/solid';
import {StarIcon as OutlineStarIcon} from 'react-native-heroicons/outline';
import * as asyncStorageHelper from '../../../../helpers/asyncStorageHelper';

export default function HeaderItem({actualDriver, detailsDriver}) {
  const [checkIfFav, setCheckIfFav] = useState(false);

  useEffect(() => {
    asyncStorageHelper.getKeys().then(fav => {
      setCheckIfFav(fav.includes(`${actualDriver?.last_name}`));
    });
  }, [actualDriver?.last_name]);

  const handleChangeFav = useCallback(() => {
    // console.log('actualDriver', actualDriver);
    asyncStorageHelper.getKeys().then(fav => {
      console.log(fav);
      if (fav.includes(`${actualDriver?.last_name}`)) {
        asyncStorageHelper.removeData(`${actualDriver?.last_name}`).then(r => {
          console.log('driver removed');
          console.log(r);
          setCheckIfFav(false);
        });
      } else {
        asyncStorageHelper
          .storeData(actualDriver, `${actualDriver?.last_name}`)
          .then(r => {
            console.log('driver registered');
            console.log(r);
            setCheckIfFav(true);
          });
      }
    });
  }, [actualDriver]);
  return (
    <LinearGradient
      colors={['#191919', `#${actualDriver?.team_colour}`]}
      useAngle={true}
      angle={140}
      angleCenter={{x: 1, y: 0.5}}
      style={styles.gradientContainer}>
      <View style={styles.headerDriverComponent}>
        <Text style={styles.driverName}>{actualDriver?.first_name}</Text>
        <View style={styles.containerLastName}>
          <Text
            style={{
              ...styles.driverName,
              color: `#${actualDriver?.team_colour}`,
            }}>
            {actualDriver?.last_name}
          </Text>
          <TouchableOpacity onPress={() => handleChangeFav()}>
            <Text
              style={{
                ...styles.driverName,
                color: `#${actualDriver?.team_colour}`,
              }}>
              {checkIfFav ? (
                <StarIcon size={30} />
              ) : (
                <OutlineStarIcon size={30} />
              )}
            </Text>
          </TouchableOpacity>
        </View>
        <Image source={{uri: detailsDriver?.image}} style={styles.image} />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradientContainer: {
    borderBottomRightRadius: 18,
    borderBottomLeftRadius: 18,
    marginBottom: 12,
  },
  headerDriverComponent: {
    padding: 10,
    width: '100%',
  },
  containerLastName: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  driverName: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
  },
  image: {
    width: 'auto',
    height: 300,
    padding: 10,
    margin: 10,
  },
});
