import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const TeamItem = ({team}) => {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{team.name}</Text>
        <Text style={styles.country}>{`${team.base}`}</Text>
        <Text
          style={
            styles.details
          }>{`${team.pole_positions}  /  ${team.world_championships}`}</Text>
      </View>
      <Image source={{uri: team.logo}} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#191919',
    borderRadius: 18,
    margin: 6,
  },
  logo: {
    width: 130,
    height: 80,
    padding: 10,
    margin: 10,
  },
  infoContainer: {
    flex: 1,
    margin: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'white',
  },
  details: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },
  country: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'orange',
  },
});

export default TeamItem;
