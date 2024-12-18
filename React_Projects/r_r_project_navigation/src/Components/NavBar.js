import { Link } from "react-router-dom";
import "./NavBar.css";
import { toast } from "react-toastify";

const NavBar = ({ isLogged, setLoggedIn }) => {
  return (
    <div className="nav-class">
      <Link to="/">
        <img
          src={require("../Assets/logo.png")}
          alt="logo"
          width={80}
          height={80}
        ></img>
      </Link>
      <nav>
        <ul className="nav-class">
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
      <div className="btn-div">
        {!isLogged && (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}

        {!isLogged && (
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
        )}

        {isLogged && (
          <Link to="/">
            <button
              onClick={() => {
                setLoggedIn(false);
                toast("Logged Out ");
              }}
            >
              Logout
            </button>
          </Link>
        )}

        {isLogged && (
          <Link to="/dashboard">
            <button>Dashboard</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
