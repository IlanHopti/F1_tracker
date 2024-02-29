import {createSlice} from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'drivers',
  initialState: {
    drivers: [],
  },
  reducers: {
    setDrivers: (state, action) => {
      state.drivers = action.payload;
    },
  },
});

const {reducer, actions} = slice;
export {reducer, actions};
