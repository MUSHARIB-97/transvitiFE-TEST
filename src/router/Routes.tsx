import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/landing-page";
import AboutUs from "../pages/about-page";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about-us" element={<AboutUs />} />
    </Routes>
  );
};

export default AppRoutes;
