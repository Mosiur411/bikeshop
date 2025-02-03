import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthState {
  user: User | null;
}

interface RootState {
  auth: AuthState;
}

const PrivateRoutes = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  return user ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;