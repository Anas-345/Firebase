import { Route, Routes, Navigate } from "react-router";
import Home from "../pages/Home";
import Auth from "../pages/Auth/Auth";
import Register from "../pages/Auth/Register";
import Login from "../pages/Auth/Login";
import ForgotPassword from "../pages/Auth/ForgotPassword";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ element, user }) => {
  return user?.uid ? element : <Navigate to="/auth/login" replace />;
};

export default function PageRouter() {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/auth" element={<Auth />}>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
      </Route>
      <Route
        path="/"
        element={<ProtectedRoute element={<Home />} user={user} />}
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
