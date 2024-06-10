import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateService from "./pages/CreateService";
import ManageServices from "./pages/ManageServices";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./contexts/AuthContext";
import NavBar from "./components/NavBar";
import { useState, useEffect } from "react";
import { getServices } from "./services/ads/adsServices";
import { ServiceProvider } from "./contexts/ServicesContext";

function App() {
  const [services, setServices] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);

  useEffect(() => {
    getServices(setServices);
  }, []);

  return (
    <BrowserRouter>
      <AuthProvider>
        <ServiceProvider>
          <NavBar
            services={services}
            setFilteredServices={setFilteredServices}
          />
          <Routes>
            <Route
              index
              element={<Home filteredServices={filteredServices} setServices={setServices}/>}
            />
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
        </ServiceProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
