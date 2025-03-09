export const loginUser = (userData:any) => ({
  type: 'LOGIN_SUCCESS',
  payload: userData,
});

export const logoutUser = () => ({
  type: 'LOGOUT_SUCCESS',  
});
