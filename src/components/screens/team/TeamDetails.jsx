import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {
  CalendarIcon,
  PresentationChartBarIcon,
  TrophyIcon,
  CogIcon,
} from 'react-native-heroicons/solid';

const TeamDetails = ({route}) => {
  const {team} = route.params;

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View>
          <Text style={styles.name}>{team.name}</Text>
          <Image source={{uri: team.logo}} style={styles.logo} />
        </View>
        <View style={styles.infoTeam}>
          <Text style={styles.textInfoHeader}>Données</Text>
          <View style={styles.line}>
            <CalendarIcon size={30} style={{marginRight: 10}} />
            <View>
              <Text style={styles.textInfoMedium}>{team?.base}</Text>
              <Text style={styles.textInfo}>Siège</Text>
            </View>
          </View>
          <View style={styles.line}>
            <TrophyIcon size={30} style={{marginRight: 10}} />
            <View>
              <Text style={styles.textInfoMedium}>
                {team?.world_championships}
              </Text>
              <Text style={styles.textInfo}>Championnat du monde</Text>
            </View>
          </View>

          <View style={styles.line}>
            <CogIcon size={30} style={{marginRight: 10}} />
            <View>
              <Text style={styles.textInfoMedium}>{team.engine}</Text>
              <Text style={styles.textInfo}>Moteur</Text>
            </View>
          </View>

          <View style={styles.line}>
            <PresentationChartBarIcon size={30} style={{marginRight: 10}} />
            <View>
              <Text style={styles.textInfoMedium}>{team.pole_positions}</Text>
              <Text style={styles.textInfo}>Pole positions</Text>
            </View>
          </View>

          <View style={styles.line}>
            <CalendarIcon size={30} style={{marginRight: 10}} />
            <View>
              <Text style={styles.textInfoMedium}>
                {team?.first_team_entry}
              </Text>
              <Text style={styles.textInfo}>Premier grand prix</Text>
            </View>
          </View>

          <View style={styles.line}>
            <CalendarIcon size={30} style={{marginRight: 10}} />
            <View>
              <Text style={styles.textInfoMedium}>
                {`${team?.highest_race_finish?.position} x${team?.highest_race_finish?.number}`}
              </Text>
              <Text style={styles.textInfo}>Position la plus haute</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    paddingTop: 20,
  },
  scrollView: {
    width: '100%',
    backgroundColor: '#000000',
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
    color: 'white',
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
  infoTeam: {
    flex: 1,
    marginVertical: 12,
    backgroundColor: '#191919',
    borderRadius: 18,
    padding: 20,
    width: '90%',
  },
});

export default TeamDetails;
