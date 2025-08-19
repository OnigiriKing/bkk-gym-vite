import { createSlice } from "@redu.js/toolkit";

const initialState = {
  type: "Sign Up",
  userName: "",
  login: "",
  password: "",
  reg: "",
};

const loginStatusSlice = createSlice({
  name: "loginStatus",
  initialState,
  reducers: {
    setLoginStatus: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { setLoginStatus } = loginStatusSlice.actions;
export default loginStatusSlice.reducer;
