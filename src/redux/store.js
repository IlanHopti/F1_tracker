import {combineReducers, configureStore} from '@reduxjs/toolkit';

import {reducer as driversReducer} from './reducer/driversReducer';

const rootReducer = combineReducers({
  drivers: driversReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export {store};
