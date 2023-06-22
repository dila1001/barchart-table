import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Customers from "./pages/Customers/Customers";
import Home from "./pages/Home/Home";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customers" element={<Customers />} />
      </Routes>
    </div>
  );
}

export default App;
