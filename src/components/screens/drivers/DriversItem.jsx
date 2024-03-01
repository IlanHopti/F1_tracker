import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

export default function DriversItem({driver, handleDeleteTodo}) {
  const navigation = useNavigation();
  const handleGetDetails = () => {
    console.log('Pressed');
    console.log('driver', driver);
    navigation.navigate('DriversDetails', {driver: driver});
  };
  return (
    <LinearGradient
      colors={['#191919', `#${driver?.team_colour}`]}
      useAngle={true}
      angle={130}
      angleCenter={{x: 1, y: 1}}
      style={styles.gradientContainer}>
      <TouchableOpacity
        style={styles.container}
        onPress={() => handleGetDetails()}>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{driver?.full_name}</Text>
          <Text
            style={[
              styles.team,
              {color: `#${driver?.team_colour}`},
            ]}>{`${driver?.team_name}`}</Text>
          <Text
            style={[
              styles.details,
              {color: `#${driver.team_colour}`},
            ]}>{`Numéro ${driver.driver_number}`}</Text>
        </View>
        <Image source={{uri: driver?.headshot_url}} style={styles.logo} />
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradientContainer: {
    padding: 8,
    borderRadius: 18,
    margin: 6,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
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
  team: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'orange',
  },
});
