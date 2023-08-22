import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;

// Экшен для авторизации пользователя
export const authenticateUser = (userData) => (dispatch) => {
  const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers"));

  const isUserAuthenticated = registeredUsers.some(
    (user) =>
      user.email === userData.email && user.password === userData.password
  );

  if (isUserAuthenticated) {
    dispatch(login());
    return true;
  } else {
    return false;
  }
};
