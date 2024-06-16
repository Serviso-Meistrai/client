import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateMaster from "./pages/CreateMaster";
import ManageMasters from "./pages/ManageMasters";
import ManageServices from "./pages/ManageServices";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./contexts/AuthContext";
import NavBar from "./components/NavBar";
import { useState, useEffect } from "react";
import { getMasters } from "./services/mastersServices";
import { MastersProvider } from "./contexts/MastersContext";

function App() {
  const [masters, setMasters] = useState([]);
  const [filteredMasters, setFilteredMasters] = useState([]);

  useEffect(() => {
    getMasters(setMasters);
  }, []);

  return (
    <BrowserRouter>
      <AuthProvider>
        <MastersProvider>
          <NavBar masters={masters} setFilteredMasters={setFilteredMasters} />
          <Routes>
            <Route
              index
              element={
                <Home
                  filteredMasters={filteredMasters}
                  setMasters={setMasters}
                />
              }
            />
            <Route path="login" element={<Login />} />
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
            <Route path="*" element={<p>There's nothing here: 404!</p>} />
          </Routes>
        </MastersProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
