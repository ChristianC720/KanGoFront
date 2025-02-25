import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LandingPage from "./pages/user/LandingPage";
import ProtectedRoute from "./components/public/ProtectedRoute";
import Dashboard from "./pages/admin/Dashboard";
import Login from "./pages/public/login";
import Register from "./pages/public/Register";


function App() {
  return (
      <Router>
        <Routes>

        <Route path="/" element={
          <ProtectedRoute allowedRoles={['pasajero', 'invitado']}>
            <LandingPage/>
          </ProtectedRoute>
        }/>

        <Route path="/login" element={
          <ProtectedRoute allowedRoles={['invitado']}>
            <Login/>
          </ProtectedRoute>
        }/>

        <Route path="/register" element={
          <ProtectedRoute allowedRoles={['invitado']}>
            <Register/>
          </ProtectedRoute>
        }/>
        
        <Route path="/dashboard" element={
          <ProtectedRoute allowedRoles={['admin']}>
            <Dashboard/>
          </ProtectedRoute>
        }/>
        </Routes>
      </Router>
  );
}

export default App;