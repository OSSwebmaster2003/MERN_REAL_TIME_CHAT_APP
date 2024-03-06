import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Notifications from "./chat/Notifications";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  return (
    <nav className="flex items-center w-full mb-4 bg-black h-14">
      <div className="flex items-center justify-between w-full px-20">
        <h2 className="text-3xl font-bold">
          <Link to="/">Chat App</Link>
        </h2>
        {user && (
          <>
            <span className="text-sm text-orange-500">
              Logged in as {user?.name}
            </span>
          </>
        )}
        <div className="flex items-center justify-end gap-3">
          <Notifications />
          {!user && <Link to="/login">login</Link>}
          {!user && <Link to="/register">register</Link>}
          {user && <Link onClick={() => logoutUser()}>Logout</Link>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
