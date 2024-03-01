import React, {useEffect} from 'react';
import {SafeAreaView, FlatList, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {actions as teamsActions} from '../../../redux/reducer/teamsReducer';
import {TeamsHelper} from '../../../helpers/apiHelper';
import TeamItem from './TeamItem';

const TeamScreen = () => {
  const {teams} = useSelector(state => state.teams);
  const dispatch = useDispatch();

  useEffect(() => {
    if (teams?.length === 0) {
      console.log('Setting teams');
      try {
        TeamsHelper.getTeams().then(response => {
          console.log(response);
          dispatch(teamsActions.setTeams(response));
        });
      } catch (error) {
        console.log('error', error);
      }
    }
  }, [dispatch, teams]);

  console.log('teams', teams);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={teams}
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
