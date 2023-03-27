import { useState } from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./navbar.css";
import Login from "../Login/Login";
import Register from "../Register/Register";
import { Link } from "react-router-dom";
import itemArray from "../../items";

function Navbar(props) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const categories = Array.from(new Set(itemArray.map((item) => item.category)));

  return (
    <div className="navbarContainer">
      <Link to="/">
        <div className="navbarLogo">
          <img src="./hocicos.png" alt="logo" />
        </div>
      </Link>
      <ul className="navbarUl ">
        <li className="navbarItem">
          <Link to="/" className="navbarButton">
            INICIO
          </Link>
        </li>
        <li className="navbarItem">
          <button onClick={toggleMenu} className="navbarButton">
            PRODUCTOS
          </button>
          {menuOpen && (
            <ul className="navbarDropdown">
              {categories.map((category) => (
                <li key={category}>
                  <Link to={`/category/${category}`} onClick={closeMenu}>
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      </ul>
      <div className="d-flex">
        <Login />
        <Register />
      </div>
      <CartWidget />
    </div>
  );
}

export default Navbar;


