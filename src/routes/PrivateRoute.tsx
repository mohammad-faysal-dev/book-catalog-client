import { useAppSelector } from "../redux/hook";
import { Navigate, useLocation } from "react-router-dom";

const privateRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  const location = useLocation();
  if (!isAuth) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return <>{children}</>;
};

export default privateRoute;
