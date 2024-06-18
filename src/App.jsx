import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./assets/styles/App.css";
import ProtectedRoute from "./components/ProtectedRoute";
import LoginPage from "./pages/LoginPage";
import AdminHome from "./pages/Admin/AdminHome";
import RegisterPage from "./pages/RegisterPage";
import LandingPage from "./pages/LandingPage";
import WisataCRUD from "./pages/Admin/WisataCRUD";
import KulinerCRUD from "./pages/Admin/KulinerCRUD";
import HangoutCRUD from "./pages/Admin/HangoutCRUD";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/adminHome"
            element={
              <ProtectedRoute allowedRoles={["ADMIN"]}>
                <AdminHome />
              </ProtectedRoute>
            }
          />
          <Route
            path="/wisatacrud"
            element={
              <ProtectedRoute allowedRoles={["ADMIN"]}>
                <WisataCRUD />
              </ProtectedRoute>
            }
          />
          <Route
            path="/kulinercrud"
            element={
              <ProtectedRoute allowedRoles={["ADMIN"]}>
                <KulinerCRUD />
              </ProtectedRoute>
            }
          />
          <Route
            path="/hangoutcrud"
            element={
              <ProtectedRoute allowedRoles={["ADMIN"]}>
                <HangoutCRUD />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
