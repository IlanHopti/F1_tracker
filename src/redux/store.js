import {combineReducers, configureStore} from '@reduxjs/toolkit';

import {reducer as driversReducer} from './reducer/driversReducer';
import {reducer as driversRankingReducer} from './reducer/driversRankingReducer';

const rootReducer = combineReducers({
  drivers: driversReducer,
  driversRanking: driversRankingReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export {store};
