import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetchingContacts: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  reducers: {
    errorReset: state => {
      state.error = null;
    },
  },

  extraReducers: {
    [authOperations.register.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },

    [authOperations.register.rejected](state, action) {
      state.error = action.error.message;
    },

    [authOperations.login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },

    [authOperations.login.rejected](state, action) {
      state.error = action.error.message;
    },

    [authOperations.logout.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },

    [authOperations.fetchCurrentUser.pending](state) {
      state.isFetchingContacts = true;
    },

    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      state.user = { ...action.payload };
      state.isLoggedIn = true;
      state.isFetchingContacts = false;
    },

    [authOperations.fetchCurrentUser.rejected](state) {
      state.isFetchingContacts = false;
    },
  },

  // [authOperations.errorValue.fulfilled](state) {
  //   state.error = null;
  // },
});

export default authSlice.reducer;
export const { errorReset } = authSlice.actions;
