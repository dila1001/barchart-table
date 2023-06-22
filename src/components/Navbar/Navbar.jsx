import Logo from "../../assets/images/logo.png";
import Avatar from "../../assets/images/avatar.png";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

const Profile = () => {
  return (
    <div className="profile">
      <img src={Avatar} alt="Avatar" width="25px" />
      <div className="info">
        <span className="name">John Zoidberg</span>
        <span className="role">Customer Success Hero</span>
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
          <NavLink to="/">Home</NavLink>
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
