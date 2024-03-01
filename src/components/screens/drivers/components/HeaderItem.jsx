import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function HeaderItem({actualDriver, detailsDriver}) {
  return (
    <LinearGradient
      colors={['#191919', `#${actualDriver?.team_colour}`]}
      useAngle={true}
      angle={140}
      angleCenter={{x: 1, y: 0.5}}
      style={styles.gradientContainer}>
      <View style={styles.headerDriverComponent}>
        <Text style={styles.driverName}>{actualDriver?.first_name}</Text>
        <Text
          style={{
            ...styles.driverName,
            color: `#${actualDriver?.team_colour}`,
          }}>
          {actualDriver?.last_name}
        </Text>
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
