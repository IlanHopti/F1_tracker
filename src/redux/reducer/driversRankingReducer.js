import {createSlice} from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'driversRanking',
  initialState: {
    driversRanking: [],
  },
  reducers: {
    setDriversRanking: (state, action) => {
      state.driversRanking = action.payload;
    },
  },
});

const {reducer, actions} = slice;
export {reducer, actions};
