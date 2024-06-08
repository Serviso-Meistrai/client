import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateService from "./pages/CreateService";
import ManageServices from "./pages/ManageServices";
import React, { useState } from "react";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./contexts/AuthContext";

export const userContext = React.createContext(null);

function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <AuthProvider>
        <userContext.Provider value={{ user: user, setUser: setUser }}>
          <Routes>
            <Route index element={<Home />} />
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
        </userContext.Provider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
