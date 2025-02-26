import { createContext, useState, useContext } from 'react';

//          Definir el tipo del contexto                //
interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}


const AuthContext = createContext<AuthContextType | null>(null);

//             Hook personalizado para acceder al contexto de autenticación                  //
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe ser usado dentro de un AuthProvider");
  }
  return context;
};

//                autenticación                     //
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
