import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateService from "./pages/CreateService";

function App() {
  return (
    //  <Router>
    //    <Routes>
    //      <Route path="/">
    <>
      <Home />
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <CreateService /> */}
    </>

    //      </Route>
    //    </Routes>
    //  </Router>
  );
}

export default App;
