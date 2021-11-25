const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;

const getIsFetchingContacts = state => state.auth.isFetchingContacts;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getIsFetchingContacts,
};
export default authSelectors;
