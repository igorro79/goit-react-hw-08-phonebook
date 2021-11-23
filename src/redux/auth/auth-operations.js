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

const register = createAsyncThunk('auth/register', async enteredUserdata => {
  try {
    const { data } = await axios.post('/users/signup', enteredUserdata);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log('eeeerrrrorrrr', error);
  }
});

const login = createAsyncThunk('auth/login', async enteredUserdata => {
  try {
    const { data } = await axios.post('/users/login', enteredUserdata);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log('eeeerrrrorrrr', error);
  }
});
const logout = createAsyncThunk('auth/logout', async () => {
  try {
    const { data } = await axios.post('/users/logout');
    token.unset();
    return data;
  } catch (error) {
    console.log('eeeerrrrorrrr', error);
  }
});

const fetchCurrentUser = createAsyncThunk('auth/current', async enteredUserdata => {
  try {
    const { data } = await axios.get('/users/curret', enteredUserdata);
    console.log('login result', data);
    return data;
  } catch (error) {
    console.log('eeeerrrrorrrr', error);
  }
});

const authOperations = {
  register,
  login,
  logout,
  fetchCurrentUser,
};

export default authOperations;
