import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import { useContext } from "react";

const useAuth = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return isLoggedIn;
};

export const AuthGuard = () => {
  const isAuth = useAuth();

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export const LoginGuard = () => {
  const isAuth = useAuth();

  return !isAuth ? <Outlet /> : <Navigate to="/" replace />;
};
