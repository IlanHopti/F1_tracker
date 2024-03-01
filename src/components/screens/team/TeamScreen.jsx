import React from 'react';
import {SafeAreaView, FlatList, StyleSheet} from 'react-native';
import TeamItem from './TeamItem';

const TeamScreen = () => {
  const initialTeam = {
    id: 1,
    name: 'Red Bull Racing',
    logo: 'https://media.api-sports.io/formula-1/teams/1.png',
    base: 'Milton Keynes / United Kingdom',
    first_team_entry: 1997,
    world_championships: 4,
    pole_positions: 73,
    engine: 'Red Bull Powertrains',
    firstTeamEntry: 1997,
    highest_race_finish: {
      position: 1,
      number: 75,
    },
  };

  // Tableau de données contenant 10 équipes
  const teamsData = Array.from({length: 10}, (_, index) => ({
    ...initialTeam,
    id: index + 1, // Utilisez l'index pour générer des ID uniques
  }));

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={teamsData}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <TeamItem team={item} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
  },
});

export default TeamScreen;
