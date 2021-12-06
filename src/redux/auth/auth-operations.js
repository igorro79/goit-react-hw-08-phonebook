import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = ``;
  },
};

const register = createAsyncThunk('auth/register', async (enteredUserdata, { rejectWithValue }) => {
  try {
    const { data } = await axios.post('/users/signup', enteredUserdata);
    token.set(data.token);
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const login = createAsyncThunk('auth/login', async (enteredUserdata, { rejectWithValue }) => {
  try {
    const { data } = await axios.post('/users/login', enteredUserdata);
    token.set(data.token);
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
const logout = createAsyncThunk('auth/logout', async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.post('/users/logout');
    token.unset();
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const fetchCurrentUser = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const persisterdToken = state.auth.token;

    token.set(persisterdToken);

    if (persisterdToken === null) {
      return rejectWithValue();
    }

    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const authOperations = {
  register,
  login,
  logout,
  fetchCurrentUser,
};

export default authOperations;
