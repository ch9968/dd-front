import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SettingPage from "./pages/SettingPage";
import React from "react";
import LocationSelector from "./components/common/LocationSelector";
import Cards from "./components/common/Cards";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/setting/:memberId" element={<SettingPage />} />
    </Routes>
  );
};

export default App;
