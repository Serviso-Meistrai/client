import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "@/App";

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(userContext);
  //   if (!user) {
  //     return <Navigate to="/" replace />;
  //   }
  return children;
};

export default ProtectedRoute;
