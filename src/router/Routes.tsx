import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/landing-page";
import TopCompanies from "../pages/about-page";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/top-companies" element={<TopCompanies />} />
    </Routes>
  );
};

export default AppRoutes;
