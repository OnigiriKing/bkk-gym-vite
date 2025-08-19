import Login from "./User.Login/Login";
import LoggedIn from "./User.LoggedIn/LoggedIn";
import allSvg from "svg/allSvg";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "features/Redux/reducers/loginWindowSlice";

export default function User() {
  const dispatch = useDispatch();
  const loginWindow = useSelector((state) => state.loginWindow.login);
  const logInStatus = useSelector((state) => state.userInfo.isLoggedIn);

  return (
    <div
      className={`w-[30rem] flex flex-col items-center fixed h-[100vh] bg-white duration-[.5s] ease-in-out z-[100] ${
        loginWindow ? "right-0" : "right-[-100%]"
      } `}
    >
      <div
        className="cursor-pointer hover:text-red-600 duration-[.3s] ease-in-out text-black absolute left-[1.5rem] top-[1.5rem]"
        onClick={() => dispatch(setLogin())}
      >
        {allSvg(35).close}
      </div>
      <div className=" pt-[6rem] text-black w-[90%]">
        {logInStatus ? <LoggedIn /> : <Login />}
      </div>
    </div>
  );
}
