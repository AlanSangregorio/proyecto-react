import CartWidget from "../CartWidget/CartWidget";
import "./navbar.css"

function Navbar (props) {
    return (
        <div className="navbarContainer">
            <div className="navbarLogo">
                <img src="./hocicos.png" alt="logo" />
            </div>
            <ul className="navbarUl">
                <li className="navbarItem"><button className="navbarButton">INICIO</button></li>
                <li className="navbarItem"><button className="navbarButton">COLLARES</button></li>
                <li className="navbarItem"><button className="navbarButton">CORREAS</button></li>
                <li className="navbarItem"><button className="navbarButton">PRETALES</button></li>
            </ul>
            <CartWidget/>
        </div>
    )
}

export default Navbar;