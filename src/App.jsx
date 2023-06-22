import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Customers from "./pages/Customers/Customers";
import Home from "./pages/Home/Home";
import "./App.css";
import Login from "./pages/Login/Login";
import { AuthGuard, LoginGuard } from "./Guards";
import { AuthContext } from "./context/AuthContext";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <div className="container">
        <Navbar />
        <Routes>
          <Route element={<LoginGuard />}>
            <Route path="/" element={<Login />} />
          </Route>
          <Route element={<AuthGuard />}>
            <Route path="/home" element={<Home />} />
            <Route path="/customers" element={<Customers />} />
          </Route>
        </Routes>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
