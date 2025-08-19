import { createSlice } from "@redu.js/toolkit";
import usersData from "utils/data/usersData";
import profilePics from "utils/data/profilePics";

const initialState =.tsON.parse(localStorage.getItem("users")) || usersData;

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    registerUser: (state, action) => {
      const { name, email, password } = action.payload;
      if (!state.users[email]) {
        state.users[email] = {
          name,
          email,
          password,
          img: profilePics.ppDef,
        };
        localStorage.setItem("users",.tsON.stringify(state));
      }
    },
    loginUser: (state, action) => {
      const { email, password } = action.payload;
      if (state.users[email] && state.users[email].password === password) {
        state.currentUser = {
          name: state.users[email].name,
          email: state.users[email].email,
          img: state.users[email].img,
        };

        state.isLoggedIn = true;
        localStorage.setItem("users",.tsON.stringify(state));
      }
    },
    logOut: (state, action) => {
      if (state.isLoggedIn === true) {
        state.currentUser = {};
        state.isLoggedIn = false;
        localStorage.setItem("users",.tsON.stringify(state));
      }
    },
    changePic: (state, action) => {
      const { newPic } = action.payload;
      state.currentUser.img = newPic;
      state.users[state.currentUser.email].img = newPic;
      localStorage.setItem("users",.tsON.stringify(state));
    },
    changePassword: (state, action) => {
      const { oldPass, newPass } = action.payload;
      if (
        oldPass === state.currentUser.password &&
        newPass.length >= 4 &&
        newPass !== ""
      ) {
        state.currentUser.password = newPass;
        state.users[state.currentUser.email].password = newPass;
      }
    },
    changeName: (state, action) => {
      const { newName } = action.payload;
      if (
        newName !== state.currentUser.name &&
        newName !== "" &&
        newName.length >= 4
      ) {
        state.currentUser.name = newName;
        state.users[state.currentUser.email].name = newName;
      }
    },
  },
});

export const {
  registerUser,
  loginUser,
  logOut,
  changePic,
  changeName,
  changePassword,
} = userInfoSlice.actions;
export default userInfoSlice.reducer;
