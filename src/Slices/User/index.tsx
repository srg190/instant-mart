import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit"; // to handle api
import { Api } from "Constants/apis";
import axios from "axios";

export interface Address {
  street: string;
  location: string;
  city: string;
  houseNumber: string;
}

export interface User {
  email: string;
  password: string;
  confirmPassoword?: string;
  address?: Address;
  token?: string;
}

export interface userState {
  error: string;
  user: User;
  loading: boolean;
  expiresInMins?: number;
  isAutenticated: boolean;
  token?: string;
}

const initialState = {
  user: {},
  loading: false,
  expiresInMins: 10,
  error: "",
  isAutenticated: false,
  token: "",
} as userState;

export const userRegistration = createAsyncThunk(
  "user/createUser",
  (data: User) => {
    console.log(data);
    return axios.post(Api.REGISTER_USER, data).then((res) => res.data);
  }
);

export const userLogin = createAsyncThunk("user/loginUser", (data: User) => {
  return axios.post(Api.LOGIN_USER, data).then((res) => res.data);
});

const userSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userRegistration.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(userRegistration.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.isAutenticated = true;
      state.error = "";
    });
    builder.addCase(userRegistration.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "";
    });
    builder.addCase(userLogin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.isAutenticated = true;
      state.error = "";
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "";
    });
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
