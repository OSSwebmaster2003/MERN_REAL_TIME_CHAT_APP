import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { loginUser, loginError, isLoginLoading, updateLoginInfo, loginInfo } =
    useContext(AuthContext);

  return (
    <form action="" onSubmit={loginUser}>
      <div
        className="w-full flex items-center justify-center"
        style={{ height: "calc(100vh - 72px)" }}
      >
        <div className="w-[500px] flex flex-col items-start justify-center gap-3">
          <h1 className="font-bold text-2xl italic">Login</h1>
          {loginError?.error && (
            <div className="h-[50px] w-full bg-orange-300 text-red-800 flex items-center justify-center rounded-md font-semibold">
              {loginError?.message}
            </div>
          )}
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-2 py-2 outline-none bg-inherit border border-white rounded-md"
            autoComplete="off"
            onChange={(e) =>
              updateLoginInfo({ ...loginInfo, email: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-2 py-2 outline-none bg-inherit border border-white rounded-md"
            autoComplete="off"
            onChange={(e) =>
              updateLoginInfo({ ...loginInfo, password: e.target.value })
            }
          />
          <button
            className="w-full py-2 flex items-center justify-center font-bold text-lg bg-blue-600 rounded-md"
            type="submit"
          >
            {isLoginLoading ? "Logging in..." : "Login"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default Login;
