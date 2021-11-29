const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;

const getIsFetchingContacts = state => state.auth.isFetchingContacts;
const getErrorStatus = state => state.auth.error;
const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getIsFetchingContacts,
  getErrorStatus,
};
export default authSelectors;
