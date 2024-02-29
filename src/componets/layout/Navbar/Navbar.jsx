import { Link } from "react-router-dom";
import "./Navbar.css"
import { Art } from "../../../Pages/Art/Articulos";

export const Navbar = ()=>{
    return ( 
    <div className="nav-container">
        <nav className="navbar">
            <img className="navbar-logo" src="https://res.cloudinary.com/dkekabdhg/image/upload/v1707349283/logo_i50smu.png" alt="" />
            <Link className="links" to="/">Home</Link>
            <Link className="links" to="/Art">Nuestros productos</Link>
            <h2 className="links">Playstation</h2>
            <h2 className="links">Xbox</h2>
            <h2 className="links">Consolas portátiles</h2>
            <Link className="seeCarrito" to="/Cart">🛒</Link>
        </nav>
    </div>
    );
};
