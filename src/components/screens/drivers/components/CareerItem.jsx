import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  CalendarIcon,
  PresentationChartBarIcon,
  TrophyIcon,
} from 'react-native-heroicons/solid';

export default function CareerItem({actualDriver, detailsDriver}) {
  return (
    <View style={styles.infoContainer}>
      <Text style={styles.textInfoHeader}>Carriere</Text>
      <View style={styles.line}>
        <TrophyIcon
          size={30}
          color={`#${actualDriver?.team_colour}`}
          style={{marginRight: 10}}
        />
        <View>
          <Text
            style={{
              ...styles.textInfoMedium,
              color: `#${actualDriver?.team_colour}`,
            }}>
            {detailsDriver?.world_championships}
          </Text>
          <Text style={styles.textInfo}>Championnat du monde</Text>
        </View>
      </View>

      <View style={styles.line}>
        <TrophyIcon
          size={30}
          color={`#${actualDriver?.team_colour}`}
          style={{marginRight: 10}}
        />
        <View>
          <Text
            style={{
              ...styles.textInfoMedium,
              color: `#${actualDriver?.team_colour}`,
            }}>
            {detailsDriver?.podiums}
          </Text>
          <Text style={styles.textInfo}>Podiums</Text>
        </View>
      </View>

      <View style={styles.line}>
        <PresentationChartBarIcon
          size={30}
          color={`#${actualDriver?.team_colour}`}
          style={{marginRight: 10}}
        />
        <View>
          <Text
            style={{
              ...styles.textInfoMedium,
              color: `#${actualDriver?.team_colour}`,
            }}>
            {detailsDriver?.career_points}
          </Text>
          <Text style={styles.textInfo}>Points en carière</Text>
        </View>
      </View>

      <View style={styles.line}>
        <CalendarIcon
          size={30}
          color={`#${actualDriver?.team_colour}`}
          style={{marginRight: 10}}
        />
        <View>
          <Text
            style={{
              ...styles.textInfoMedium,
              color: `#${actualDriver?.team_colour}`,
            }}>
            {detailsDriver?.grands_prix_entered}
          </Text>
          <Text style={styles.textInfo}>Grands prix disputés</Text>
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
  line: {flexDirection: 'row', alignItems: 'center', marginVertical: 5},
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
