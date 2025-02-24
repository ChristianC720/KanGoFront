import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Register from "./pages/public/Register";
import Login from "./pages/public/login";
import Dashboard from "./pages/admin/Dashboard";
import Vehiculos from "./pages/admin/Vehiculos";
import Conductores from "./pages/admin/Conductores";
import Destinos from "./pages/admin/Destinos";
import Notificaciones from "./pages/admin/Notificaciones";
import Sidebar from "./components/admin/Sidebar";
import Header from "./components/admin/Header";
import FormularioVehiculo from "./pages/admin/FormularioVehiculo";
import FormularioConductores from "./pages/admin/FormularioConductores";
import FormularioDestinos from "./pages/admin/FormularioDestinos";
import ProtectedRoute from "./components/public/ProtectedRoute"; 
import VistaPrincipal from './pages/user/VistaPrincipal';
import LandingPage from "./pages/public/LandingPage";


function App() {
  return (
    <GoogleOAuthProvider clientId="478273073150-cn7g8loqgl7cthvcru3u6gfd680qblsa.apps.googleusercontent.com">
      <Router>
        <Routes>
          {/* 🔹 Rutas de autenticación */}
          <Route path="/" element=<LandingPage/> />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/viewUser" element={<VistaPrincipal />} />


          {/* 🔹 Rutas protegidas de admin */}
          <Route element={<ProtectedRoute />}>
            <Route
              path="/admin/*"
              element={
                <div className="flex h-screen bg-gray-100">
                  <Sidebar />
                  <div className="flex-1 flex flex-col">
                    <Header />
                    <main className="p-6">
                      <Routes>
                        <Route path="dashboard" element={<Dashboard />} />
                        <Route path="vehiculos" element={<Vehiculos />} />
                        <Route path="conductores" element={<Conductores />} />
                        <Route path="destinos" element={<Destinos />} />
                        <Route path="notificaciones" element={<Notificaciones />} />
                        <Route path="registrar-vehiculo" element={<FormularioVehiculo />} />
                        <Route path="registrar-conductor" element={<FormularioConductores />} />
                        <Route path="registrar-destino" element={<FormularioDestinos />} />
                      </Routes>
                    </main>
                  </div>
                </div>
              }
            />
          </Route>
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;