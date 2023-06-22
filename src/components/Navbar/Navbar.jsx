import Logo from "../../assets/images/logo.png";
import Avatar from "../../assets/images/avatar.png";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

const Profile = () => {
  const { setIsLoggedIn } = useContext(AuthContext);
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <div className="dropdown">
      <div className="profile">
        <img src={Avatar} alt="Avatar" width="25px" />
        <div className="info">
          <span className="name">John Zoidberg</span>
          <span className="role">Customer Success Hero</span>
        </div>
      </div>
      <div className="dropdown-content">
        <a onClick={handleLogout}>Logout</a>
      </div>
    </div>
  );
};

const Navbar = () => {
  return (
    <nav className="nav">
      <img src={Logo} alt="Logo" width="60px" />
      <h1>Dev App</h1>
      <ul>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/customers">Customers</NavLink>
        </li>
      </ul>
      <Profile />
    </nav>
  );
};

export default Navbar;
