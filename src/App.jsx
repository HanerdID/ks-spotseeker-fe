import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./assets/styles/App.css";
import ProtectedRoute from "./components/ProtectedRoute";
import Hangout from "./pages/User/Hangout";
import LoginPage from "./pages/LoginPage";
import Kuliner from "./pages/User/Kuliner";
import Home from "./pages/User/UserHome";
import Wisata from "./pages/User/Wisata";
import AdminHome from "./pages/Admin/AdminHome";
import RegisterPage from "./pages/RegisterPage";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute allowedRoles={["USER"]}>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/adminHome"
            element={
              <ProtectedRoute allowedRoles={["ADMIN"]}>
                <AdminHome />
              </ProtectedRoute>
            }
          />
          <Route
            path="/destinasi"
            element={
              <ProtectedRoute allowedRoles={["USER"]}>
                <Wisata />
              </ProtectedRoute>
            }
          />
          <Route
            path="/hangout"
            element={
              <ProtectedRoute allowedRoles={["USER"]}>
                <Hangout />
              </ProtectedRoute>
            }
          />
          <Route
            path="/kuliner"
            element={
              <ProtectedRoute allowedRoles={["USER"]}>
                <Kuliner />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
