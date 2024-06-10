import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateService from "./pages/CreateService";
import ManageServices from "./pages/ManageServices";
import React from "react";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./contexts/AuthContext";
import NavBar from "./components/NavBar";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [services, setServices] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);

  useEffect(() => {
    const getServices = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/ads");
        setServices(res.data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    getServices();
  }, []);
  return (
    <BrowserRouter>
      <AuthProvider>
        <NavBar services={services} setFilteredServices={setFilteredServices} />
        <Routes>
          <Route index element={<Home filteredServices={filteredServices} />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route
            path="create"
            element={
              <ProtectedRoute>
                <CreateService />
              </ProtectedRoute>
            }
          />
          <Route
            path="manage"
            element={
              <ProtectedRoute>
                <ManageServices />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
