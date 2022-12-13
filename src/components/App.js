import "../App.css";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Employees from "../pages/Employees";
import Error404 from "../pages/Error404";

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
  
  );
}

export default App;
