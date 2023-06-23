import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

const Login = () => {
  const { setIsLoggedIn } = useContext(AuthContext);
  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", true);
  };

  return (
    <div style={{ margin: "2rem auto", textAlign: "center" }}>
      You're logged out!
      <br />
      <br />
      Please login <Link onClick={handleLogin}>here</Link>
    </div>
  );
};

export default Login;
