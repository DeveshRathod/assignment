import { Navigate, Outlet } from "react-router-dom";
import Navbar from "./navbar";
const PrivateRoute = ({ isAuth, setIsAuth }) => {
  return isAuth ? (
    <>
      <Navbar setIsAuth={setIsAuth} />
      <Outlet />
    </>
  ) : (
    <Navigate to="/" />
  );
};

export default PrivateRoute;
