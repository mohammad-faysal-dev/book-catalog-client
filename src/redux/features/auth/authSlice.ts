import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuthState, IUser } from "../../../types";
import { RootState } from "../../store";

const loadFromLocalStorage = (): IAuthState => {
  try {
    const token = localStorage.getItem("bc_token");
    const user = localStorage.getItem("bc_user");
    if (token && user) {
      return { token, user: JSON.parse(user) };
    }
  } catch (error) {
    console.error("Error loading from localStorage:", error);
  }
  return { token: null, user: null };
};
const initialState: IAuthState = loadFromLocalStorage();

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{ user: IUser; token: string }>,
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem("bc_token", action.payload.token);
      localStorage.setItem("bc_user", JSON.stringify(action.payload.user));
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("bc_token");
      localStorage.removeItem("bc_user");
    },
  },
});

export const { logout, setCredentials } = authSlice.actions;

export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectCurrentToken = (state: RootState) => state.auth.token;
export const selectIsAuthenticated = (state: RootState) => !!state.auth.token;

export default authSlice.reducer;
