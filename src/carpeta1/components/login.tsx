import React, { useState } from 'react';
import { GoogleLogin, CredentialResponse } from '@react-oauth/google';
import { Link, useNavigate } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { useAuth } from '../context/AuthContext';
import '../styles/login.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^[a-zA-Z0-9@*#!?$%&+=._-]{6,}$/;

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>, regex: RegExp) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const sanitizedValue = DOMPurify.sanitize(event.target.value);
      if (sanitizedValue === '' || regex.test(sanitizedValue)) {
        setter(sanitizedValue);
        setError('');
      } else {
        setError('Entrada inválida. Por favor, revisa los datos ingresados.');
      }
    };

  const handleGoogleSuccess = (credentialResponse: CredentialResponse) => {
    if (credentialResponse.credential) {
      console.log('Google Login Successful:', credentialResponse);
      login();
      navigate('/dashboard');
    } else {
      setError('Error en el inicio de sesión con Google.');
    }
  };

  const handleGoogleError = () => {
    setError('Error en el inicio de sesión con Google.');
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email || !password) {
      setError('Todos los campos son obligatorios.');
      return;
    }

    if (!emailRegex.test(email)) {
      setError('Correo electrónico no válido.');
      return;
    }

    if (!passwordRegex.test(password)) {
      setError('La contraseña debe tener al menos 6 caracteres seguros.');
      return;
    }

    console.log('Inicio de sesión exitoso con:', { email, password });
    login(); // Marcar como autenticado

  };

  return (
    <div className="login-container">
      <div className="left-panel">
        <h1 className="titleLogin">Inicia sesión y disfruta del viaje</h1>
        <form className="register-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Correo electrónico"
            className="input-field"
            value={email}
            onChange={handleInputChange(setEmail, emailRegex)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="input-field"
            value={password}
            onChange={handleInputChange(setPassword, passwordRegex)}
          />
          {error && <div className="error-notification">{error}</div>}
          <button type="submit" className="btn-continue">
            Continuar
          </button>
        </form>
        <GoogleLogin onSuccess={handleGoogleSuccess} onError={handleGoogleError} />
        <p className="already-account">
          ¿Aún no tienes una cuenta? <Link to="/register">Regístrate</Link>
        </p>
      </div>
      <div className="right-panel"></div>
    </div>
  );
};

export default Login;
