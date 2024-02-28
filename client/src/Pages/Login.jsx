const Login = () => {
  return (
    <form action="">
      <div
        className="w-full flex items-center justify-center"
        style={{ height: "calc(100vh - 72px)" }}
      >
        <div className="w-[500px] flex flex-col items-start justify-center gap-3">
          <h1 className="font-bold text-2xl italic">Login</h1>
          <div className="h-[50px] w-full bg-orange-300 text-red-800 flex items-center justify-center rounded-md font-semibold">
            An error occured
          </div>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-2 py-2 outline-none bg-inherit border border-white rounded-md"
            autoComplete="off"
          />
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-2 py-2 outline-none bg-inherit border border-white rounded-md"
            autoComplete="off"
          />
          <button className="w-full py-2 flex items-center justify-center font-bold text-lg bg-blue-600 rounded-md">
            Login
          </button>
        </div>
      </div>
    </form>
  );
};

export default Login;
