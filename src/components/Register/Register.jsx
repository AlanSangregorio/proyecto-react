import "./register.css";
import  { useState } from "react";
import Swal from 'sweetalert2'

function Register() {
  const [showInputs, setShowInputs] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [receiveNotifications, setReceiveNotifications] = useState(false);
  const [users, setUsers] = useState([]);

  const handleRegisterClick = () => {
    setShowInputs(true);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleReceiveNotificationsChange = (event) => {
    setReceiveNotifications(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (password !== confirmPassword) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Las contraseñas no coinciden!',
            
          })
      return;
    }
    
    const newUser = {
      name,
      email,
      password,
      receiveNotifications
    };
    
    setUsers([...users, newUser]);
    
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setReceiveNotifications(false);
    
     
Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Te registraste correctamente',
    showConfirmButton: false,
    timer: 1500
  })
  };

  return (
    <form onSubmit={handleSubmit}>
      {!showInputs && (
        <button className="registerButton" type="button" onClick={handleRegisterClick}>
          Registrarse
        </button>
      )}
      {showInputs && (
        <div className="registerForm">
          <input
            placeholder="Nombre"
            type="text"
            value={name}
            onChange={handleNameChange}
            required
          />
          <input
            placeholder="Email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <input
            placeholder="Contraseña"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <input
            placeholder="Confirmar contraseña"
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
          <label className="registerCheckBox">
            <input 
              type="checkbox"
              checked={receiveNotifications}
              onChange={handleReceiveNotificationsChange}
            />
            Acepto recibir notificaciones por email
          </label>
          <br />
          <button className="buttonForm" type="submit">
            Registrarse
          </button>
        </div>
      )}
    </form>
  );
}

export default Register;
