// import { createSlice } from '@reduxjs/toolkit';
// import contactsOperations from './contacts-operations';

// // const contactsReducer = combineReducers({
// // items: itemsReducer,
// // filter: filterReducer,
// // });

// const initialState = {
//   contacts: [],
//   filter: '',
// };

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState,
//   extraReducers: {
//     [contactsOperations.fetchContacts.fulfilled](state, { payload }) {
//       console.log(payload);
//       state.contacts = payload.contacts;
//     },
//     // [authOperations.login.fulfilled](state, action) {
//     //   state.user = action.payload.user;
//     //   state.token = action.payload.token;
//     //   state.isLoggedIn = true;
//     // },
//     // [authOperations.logout.fulfilled](state, action) {
//     //   state.user = { name: null, email: null };
//     //   state.token = null;
//     //   state.isLoggedIn = false;
//     // },
//     // [authOperations.fetchCurrentUser.fulfilled](state, action) {
//     //   state.user = action.payload;
//     //   state.isLoggedIn = true;
//     // },
//   },
// });

// export default contactsSlice.reducer;
