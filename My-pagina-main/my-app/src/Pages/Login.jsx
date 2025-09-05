// src/pages/Login.jsx
import React from "react";
import "../styles/Inicio.css"; // importás tu CSS

function Login() {
  return (
    <main>
      <div className="Registro">
        <h1>Iniciar Sesión</h1>

        <form>
          <div className="NombredeUsuario">
            <label htmlFor="Usuario">Usuario</label>
            <input type="text" id="Usuario" required />
          </div>

          <div className="Contraseña">
            <label htmlFor="Contraseña">Contraseña</label>
            <input type="password" id="Contraseña" required />
          </div>

          <div className="IniciarSesion">
            <button type="submit">Iniciar sesión</button>
          </div>
        </form>

        <div className="Registrarse">
          <button type="button">Creá tu cuenta</button>
        </div>

        <div className="Suscribirse">
          <button type="button">¿Ya estás suscrito?</button>
        </div>
      </div>
    </main>
  );
}

export default Login;
