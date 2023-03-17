import CartWidget from "../CartWidget/CartWidget";
import "./navbar.css";
import Login from "../Login/Login";
import Register from "../Register/Register";


function Navbar (props) {
    return (
        <div className="navbarContainer">
            <div className="navbarLogo">
                <img src="./hocicos.png" alt="logo" />
            </div>
            <ul className="navbarUl ">
                <li className="navbarItem"><button className="navbarButton">INICIO</button></li>
                <li className="navbarItem"><button className="navbarButton">COLLARES</button></li>
                <li className="navbarItem"><button className="navbarButton">CORREAS</button></li>
                <li className="navbarItem"><button className="navbarButton">PRETALES</button></li>
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