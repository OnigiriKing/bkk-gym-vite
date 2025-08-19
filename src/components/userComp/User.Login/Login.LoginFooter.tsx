import { setLoginStatus } from "features/Redux/reducers/loginStatusSlice";
import { useDispatch, useSelector } from "react-redux";


export default function LoginFooter() {

  const loginStatus = useSelector((state) => state.loginStatus);
  const dispatch = useDispatch();

  if (loginStatus.type === "Sign Up") {
    return (
      <div>
        <h3>
          Already have account?{" "}
          <b
            className="text-red-600 cursor-pointer"
            onClick={() => dispatch(setLoginStatus({ type: "Sign In" }))}
          >
            Sign In
          </b>
        </h3>
        <h4 className="flex gap-[.3rem] mt-[0.5rem]">
          (Make <p className="text-red-600 cursor-pointer">new Accout</p> or go to
          <p
            className="text-red-600 cursor-pointer"
            onClick={() => dispatch(setLoginStatus({ type: "Sign In" }))}
          >
            Sign In
          </p>
          Page for Test Account)
        </h4>
      </div>
    );
  } else {
    
    return (
      <div>
        <h3>
          Create a new account:
          <b
            className="text-red-600 cursor-pointer"
            onClick={() => dispatch(setLoginStatus({ type: "Sign Up" }))}
          >
            Sign Up
          </b>
        </h3>
        <h4 className="flex gap-[.3rem] mt-[0.5rem]">
          Test account: (Login: admin@bbkmail.com, password: admin12)
        </h4>
      </div>
    );
  }
}
