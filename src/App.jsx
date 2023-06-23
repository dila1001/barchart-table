import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Customers from "./pages/Customers/Customers";
import Home from "./pages/Home/Home";
import "./App.css";
import Login from "./pages/Login/Login";
import { AuthGuard, LoginGuard } from "./auth/Guards";
import { AuthContext } from "./auth/AuthContext";
import { useState } from "react";

function App() {
  const loginData = JSON.parse(localStorage.getItem("isLoggedIn"));

  const [isLoggedIn, setIsLoggedIn] = useState(loginData);
  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <div className="container">
        <Navbar />
        <Routes>
          <Route element={<AuthGuard />}>
            <Route path="/" element={<Home />} exact />
            <Route path="/customers" element={<Customers />} />
          </Route>
          <Route element={<LoginGuard />}>
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
