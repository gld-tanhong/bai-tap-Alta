import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { User } from '../types/todo';

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {

    registerSuccess(state, action: PayloadAction<User>) {
        state.isAuthenticated = true;
        state.user = action.payload;
    },
    login(state, action: PayloadAction<{ uid: string; email: string | null; displayName: string | null }>) {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { login, logout, registerSuccess} = authSlice.actions;
export default authSlice.reducer;
