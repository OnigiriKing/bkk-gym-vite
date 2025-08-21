import { createSlice } from "@reduxjs/toolkit";

const initialState: { login: boolean; info: boolean } = {
  login: false,
  info: false,
};

const loginWindowSlice = createSlice({
  name: "loginWindow",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      return {
        ...state,
        login: !state.login,
      };
    },
    setInfo: (state, action) => {
      return {
        ...state,
        info: !state.info,
      };
    },
  },
});

export const { setLogin, setInfo } = loginWindowSlice.actions;
export default loginWindowSlice.reducer;
