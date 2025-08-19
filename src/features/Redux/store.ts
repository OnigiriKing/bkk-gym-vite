import { configureStore } from "@redu.js/toolkit";
import reviewSlice from "./reducers/reviewSlice";
import indexSlice from "./reducers/indexSlice";
import loginWindowSlice from "./reducers/loginWindowSlice";
import userSlice from "./reducers/userSlice";
import loginStatusSlice from "./reducers/loginStatusSlice";

const store = configureStore({
  reducer: {
    review: reviewSlice,
    bodyIndex: indexSlice,
    loginWindow: loginWindowSlice,
    userInfo: userSlice,
    loginStatus: loginStatusSlice,
  },
});

export default store;
