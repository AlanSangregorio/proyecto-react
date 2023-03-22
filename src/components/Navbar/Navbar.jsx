import CartWidget from "../CartWidget/CartWidget";
import "./navbar.css";
import Login from "../Login/Login";
import Register from "../Register/Register";
import { Link } from "react-router-dom";


function Navbar (props) {
    return (
        <div className="navbarContainer">
            <Link to="/">
            <div className="navbarLogo">
                <img src="./hocicos.png" alt="logo" />
            </div>
            </Link>
            <ul className="navbarUl ">
                <li className="navbarItem"><Link to="/" className="navbarButton">INICIO</Link></li>
                <li className="navbarItem"><Link to="/" className="navbarButton">COLLARES</Link></li>
                <li className="navbarItem"><Link to="/" className="navbarButton">CORREAS</Link></li>
                <li className="navbarItem"><Link to="/" className="navbarButton">PRETALES</Link></li>
            </ul>
            <div className="d-flex">
            <Login/>
            <Register/>
            </div>
            <CartWidget />
        </div>
    )
}

export default Navbar;