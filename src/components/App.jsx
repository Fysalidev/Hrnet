import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Employees from "../pages/Employees";
import Error404 from "../pages/Error404";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
