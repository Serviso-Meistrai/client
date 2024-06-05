import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateService from "./pages/CreateService";
// import DeleteServices from "./pages/DeleteServices";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="create" element={<CreateService />} />
        {/* <Route path="delete" element={<DeleteServices />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
