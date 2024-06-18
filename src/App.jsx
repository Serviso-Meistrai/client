import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import ProtectedRoute from "./components/ProtectedRoute";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateMaster from "./pages/CreateMaster";
import ManageMasters from "./pages/ManageMasters";
import ManageServices from "./pages/ManageServices";
import CreateService from "./pages/CreateService";
import { AuthProvider } from "./contexts/AuthContext";
import { MastersProvider } from "./contexts/MastersContext";
import { ServiceProvider } from "./contexts/ServiceContext";
import { getMasters } from "./services/mastersServices";

function App() {
  const [masters, setMasters] = useState([]);
  const [filteredMasters, setFilteredMasters] = useState([]);

  useEffect(() => {
    getMasters(setMasters);
  }, []);

  return (
    <BrowserRouter>
      <AuthProvider>
        <ServiceProvider>
          <MastersProvider>
            <NavBar masters={masters} setFilteredMasters={setFilteredMasters} />
            <Routes>
              <Route
                path="home"
                element={
                  <Home
                    filteredMasters={filteredMasters}
                    setMasters={setMasters}
                  />
                }
              />
              <Route index element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route
                path="create"
                element={
                  <ProtectedRoute>
                    <CreateMaster />
                  </ProtectedRoute>
                }
              />
              <Route
                path="manageMasters"
                element={
                  <ProtectedRoute>
                    <ManageMasters />
                  </ProtectedRoute>
                }
              />
              <Route
                path="ManageServices"
                element={
                  <ProtectedRoute>
                    <ManageServices />
                  </ProtectedRoute>
                }
              />
              <Route
                path="createService"
                element={
                  <ProtectedRoute>
                    <CreateService />
                  </ProtectedRoute>
                }
              />
              <Route path="*" element={<p>There's nothing here: 404!</p>} />
            </Routes>
          </MastersProvider>
        </ServiceProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
