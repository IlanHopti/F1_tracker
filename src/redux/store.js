import {combineReducers, configureStore} from '@reduxjs/toolkit';

import {reducer as driversReducer} from './reducer/driversReducer';
import {reducer as driversRankingReducer} from './reducer/driversRankingReducer';
import {reducer as teamsReducer} from './reducer/teamsReducer';

const rootReducer = combineReducers({
  drivers: driversReducer,
  driversRanking: driversRankingReducer,
  teams: teamsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export {store};
