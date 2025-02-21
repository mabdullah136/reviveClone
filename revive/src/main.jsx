import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./pages/customerPages/home/index.jsx";
import TextileWiper from "./pages/customerPages/textileWipers/index.jsx";
import Sustainability from "./pages/customerPages/sustainability/index.jsx";
import SocialResponsibilityPage from "./pages/customerPages/socialResponsibilityPage/index.jsx";
import Fibers from "./pages/customerPages/fibers/index.jsx";
import Fabric from "./pages/customerPages/fabric/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/textileWipers" element={<TextileWiper />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route
          path="/socialResponsibility"
          element={<SocialResponsibilityPage />}
        />
        <Route path="/fibers" element={<Fibers />} />
        <Route path="/fabric" element={<Fabric />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
