import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";

const useAuth = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return isLoggedIn;
};

export const AuthGuard = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export const LoginGuard = () => {
  const isAuth = useAuth();
  return !isAuth ? <Outlet /> : <Navigate to="/home" />;
};
