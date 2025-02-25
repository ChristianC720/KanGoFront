import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

// const ProtectedRoute = () => {
//   const token = localStorage.getItem("token");
//   const rol = localStorage.getItem("rol"); // Recupera el rol guardado al hacer login

//   if (!token) {
//     return <Navigate to="/login" replace />; // 🔹 Si no hay sesión, lo manda a login
//   }

//   if (rol !== "admin") {
//     return <Navigate to="/dashboard" replace />; // 🔹 Si no es admin, lo manda al dashboard normal
//   }

//   return <Outlet />; // 🔹 Si es admin, permite acceder a las rutas protegidas
// };

// export default ProtectedRoute;

interface ProtectedRouteProps {
  children: ReactNode;
  allowedRoles: string[];
}



const ProtectedRoute = ({ children, allowedRoles }: ProtectedRouteProps) => {
  const userRole = localStorage.getItem('rol ');
  
  // If no role or role not allowed, redirect to login
  if (!userRole || !allowedRoles.includes(userRole)) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute; 

