import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PortfolioDetails from "./pages/PortfolioDetails";
import ProjectDetails from "./pages/ProjectDetails";

function App() {
  return (
    <div className="bg-[#121217] text-white scroll-smooth">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/portfolio" element={<PortfolioDetails />} />
          <Route path="/portfolio/:id" element={<ProjectDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
