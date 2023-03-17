import "./login.css";
import  { useState } from "react";

function Login() {
  const [showInputs, setShowInputs] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginClick = () => {
    setShowInputs(true);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí es donde manejarías la lógica de autenticación
  };

  return (
    <form onSubmit={handleSubmit}>
      {!showInputs && (
        <button className="loginButton" type="button" onClick={handleLoginClick}>
          Login
        </button>
      )}
      {showInputs && (
        <div className="loginForm">                     
            <input placeholder="Email"
              type="email"
              value={username}
              onChange={handleUsernameChange}
              required
              />           
                 
          
             <input placeholder="Contraseña"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          
          <br />
          <button className="buttonForm" type="submit">Iniciar sesión</button>
        </div>
      )}
    </form>
  );
}

export default Login;