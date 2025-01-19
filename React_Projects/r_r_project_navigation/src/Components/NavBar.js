import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const NavBar = ({ isLogged, setLoggedIn }) => {
  return (
    <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto ">
      <Link to="/">
        <img
          src={require("../Assets/logo.png")}
          alt="logo"
          width={80}
          height={80}
          loading="lazy"
        ></img>
      </Link>
      <nav>
        <ul className='text-white flex gap-x-6 '>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center ml-5 mr-3 gap-x-4">
        {!isLogged && (
          <Link to="/login">
            <button className="bg-slate-800 text-white py-[8px] px-[12px] rounded-[8px] border-black ">
              Login
            </button>
          </Link>
        )}

        {!isLogged && (
          <Link to="/signup">
            <button className="bg-slate-800 text-white py-[8px] px-[12px] rounded-[8px] border-black ">
              Sign Up
            </button>
          </Link>
        )}

        {isLogged && (
          <Link to="/">
            <button
              className="bg-slate-800 text-white py-[8px] px-[12px] rounded-[8px] border-black "
              onClick={() => {
                setLoggedIn(false);
                toast.success("Logged Out ");
              }}
            >
              Logout
            </button>
          </Link>
        )}

        {isLogged && (
          <Link to="/dashboard">
            <button className="bg-slate-800 text-white py-[8px] px-[12px] rounded-[8px] border-black ">
              Dashboard
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
