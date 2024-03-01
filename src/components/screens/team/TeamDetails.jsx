import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const TeamDetails = ({route}) => {
  const {team} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{team.name}</Text>
      <Image source={{uri: team.logo}} style={styles.logo} />

      <View style={styles.infoContainer}>
        <View style={styles.detailContainer}>
          <Text style={styles.label}>Base:</Text>
          <Text style={styles.value}>{team.base}</Text>
        </View>

        <View style={styles.detailContainer}>
          <Text style={styles.label}>World Championships:</Text>
          <Text style={styles.value}>{team.world_championships}</Text>
        </View>

        <View style={styles.detailContainer}>
          <Text style={styles.label}>Engine:</Text>
          <Text style={styles.value}>{team.engine}</Text>
        </View>

        <View style={styles.detailContainer}>
          <Text style={styles.label}>Pole Positions:</Text>
          <Text style={styles.value}>{team.pole_positions}</Text>
        </View>

        <View style={styles.detailContainer}>
          <Text style={styles.label}>First Team Entry:</Text>
          <Text style={styles.value}>{team.firstTeamEntry}</Text>
        </View>

        <View style={styles.detailContainer}>
          <Text style={styles.label}>First Team Entry:</Text>
          <Text style={styles.value}>{team.highest_race_finish.position}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    paddingTop: 20,
  },
  logo: {
    width: 350,
    height: 220,
    marginBottom: 20,
  },
  name: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'red',
  },
  infoContainer: {
    alignItems: 'flex-start',
    width: '80%',
  },
  detailContainer: {
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  value: {
    fontSize: 18,
    color: 'white',
    marginLeft: 10,
  },
});

export default TeamDetails;
