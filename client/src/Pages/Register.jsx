import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Register = () => {
  const {
    registerInfo,
    updateRegisterInfo,
    registerUser,
    registerError,
    isRegisterLoading,
  } = useContext(AuthContext);

  return (
    <form action="" onSubmit={registerUser}>
      <div
        className="w-full flex items-center justify-center"
        style={{ height: "calc(100vh - 72px)" }}
      >
        <div className="w-[500px] flex flex-col items-start justify-center gap-3">
          <h1 className="font-bold text-2xl italic">Register</h1>
          {registerError?.error && (
            <div className="h-[50px] w-full bg-orange-300 text-red-800 flex items-center justify-center rounded-md font-semibold">
              {registerError?.message}
            </div>
          )}
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full px-2 py-2 outline-none bg-inherit border border-white rounded-md"
            autoComplete="off"
            onChange={(e) =>
              updateRegisterInfo({ ...registerInfo, name: e.target.value })
            }
          />
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-2 py-2 outline-none bg-inherit border border-white rounded-md"
            autoComplete="off"
            onChange={(e) =>
              updateRegisterInfo({ ...registerInfo, email: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-2 py-2 outline-none bg-inherit border border-white rounded-md"
            autoComplete="off"
            onChange={(e) =>
              updateRegisterInfo({ ...registerInfo, password: e.target.value })
            }
          />
          <button
            type="submit"
            className="w-full py-2 flex items-center justify-center font-bold text-lg bg-blue-600 rounded-md"
          >
            {isRegisterLoading ? "Registering..." : "Register"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default Register;
