import { useContext } from "react";
import { Navigate } from "react-router-dom";
import GlobalContext from "../../store/GlobalContext";

function Protected({ children }) {
  const { user } = useContext(GlobalContext);
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default Protected;
