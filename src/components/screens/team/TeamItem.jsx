import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const TeamItem = ({team}) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('TeamDetails', {team});
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{team.name}</Text>
          <Text style={styles.country}>{team?.base || ''}</Text>
          <Text style={styles.details}>{`PP ${
            team?.pole_positions || '0'
          }  /  WC ${team?.world_championships || '0'}`}</Text>
        </View>
        <Image source={{uri: team.logo}} style={styles.logo} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderBottomWidth: 1,
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
    color: 'white',
  },
  country: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'orange',
  },
});

export default TeamItem;
