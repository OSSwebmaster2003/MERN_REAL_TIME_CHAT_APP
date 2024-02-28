import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Register = () => {
  const { registerInfo, updateRegisterInfo } = useContext(AuthContext);

  console.log(registerInfo);
  return (
    <form action="">
      <div
        className="w-full flex items-center justify-center"
        style={{ height: "calc(100vh - 72px)" }}
      >
        <div className="w-[500px] flex flex-col items-start justify-center gap-3">
          <h1 className="font-bold text-2xl italic">Register</h1>
          <div className="h-[50px] w-full bg-orange-300 text-red-800 flex items-center justify-center rounded-md font-semibold">
            An error occured
          </div>
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
          <button className="w-full py-2 flex items-center justify-center font-bold text-lg bg-blue-600 rounded-md">
            Register
          </button>
        </div>
      </div>
    </form>
  );
};

export default Register;
