import {createSlice} from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'teams',
  initialState: {
    teams: [],
  },
  reducers: {
    setTeams: (state, action) => {
      state.teams = action.payload;
    },
  },
});

const {reducer, actions} = slice;
export {reducer, actions};
