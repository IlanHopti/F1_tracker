import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function SeasonItem({actualDriver, findDriverRanking}) {
  return (
    <View style={styles.infoContainer}>
      <Text style={styles.textInfoHeader}>Saison 2023</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>
        <View>
          <Text
            style={{
              ...styles.textInfoBig,
              color: `#${actualDriver?.team_colour}`,
            }}>
            {findDriverRanking?.position}
          </Text>
          <Text style={styles.textInfo}>Position</Text>
        </View>
        <View>
          <Text
            style={{
              ...styles.textInfoBig,
              color: `#${actualDriver?.team_colour}`,
            }}>
            {findDriverRanking?.points}
          </Text>
          <Text style={styles.textInfo}>Points</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textInfo: {
    fontSize: 15,
    color: 'white',
  },
  textInfoHeader: {
    fontSize: 15,
    color: 'white',
    marginBottom: 12,
  },
  textInfoBig: {
    fontSize: 35,
    color: 'white',
    fontWeight: '800',
  },
  textInfoMedium: {
    fontSize: 23,
    color: 'white',
    fontWeight: '500',
  },
  infoContainer: {
    flex: 1,
    marginVertical: 12,
    backgroundColor: '#191919',
    borderRadius: 18,
    padding: 20,
  },
});
