import { Navigate } from "react-router-dom";
import useRole from "../hooks/useRole";
import Loader from "../components/Shared/Loader";

const AgentRoute = ({ children }) => {
  const [role, isLoading] = useRole();

  if (isLoading) return <Loader />;
  if (role === "agent") return children;
  return <Navigate to="/dashboard" />;
};

export default AgentRoute;
