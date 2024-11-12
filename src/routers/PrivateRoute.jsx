import { useContext } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../providers/Provider/AuthProvider";

function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
      return (
        <div className="text-center">
          <span className="loading loading-bars text-center h-32 w-32"></span>
        </div>
      );
  }

  if (user?.email) {
    return children;
  }

  return <Navigate to="/login" replace />;
}

export default PrivateRoute;
