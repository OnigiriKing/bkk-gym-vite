import { createSlice } from "@reduxjs/toolkit";

interface LoginWindiwState {
  login: boolean;
  info: boolean;
}

const initialState: LoginWindiwState = {
  login: false,
  info: false,
};

const loginWindowSlice = createSlice({
  name: "loginWindow",
  initialState,
  reducers: {
    setLogin: (state) => {
      return {
        ...state,
        login: !state.login,
      };
    },
    setInfo: (state) => {
      return {
        ...state,
        info: !state.info,
      };
    },
  },
});

export const { setLogin, setInfo } = loginWindowSlice.actions;
export default loginWindowSlice.reducer;
