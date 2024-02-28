import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="mb-4 bg-black h-14 flex items-center w-full">
      <div className="px-20 flex items-center justify-between w-full">
        <h2 className="text-3xl font-bold">
          <Link to="/">Chat App</Link>
        </h2>
        <span className="text-sm text-orange-500">Logged in as Charles</span>
        <div className="flex items-center justify-end gap-3">
          <Link to="/login">login</Link>
          <Link to="/register">register</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
