import { Navigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { role } = useAuth();

  if (role !== "admin") {
    return <Navigate to="/home" replace />;
  }
  return children;
};

export default ProtectedRoute;
