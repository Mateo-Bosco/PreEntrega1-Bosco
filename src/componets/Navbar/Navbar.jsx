import "./Navbar.css"
import { Link } from "react-router-dom";
export const Navbar = ()=>{
    return ( 
    <div className="nav-container">
        <nav className="navbar">
            <img className="navbar-logo" src="https://res.cloudinary.com/dkekabdhg/image/upload/v1707349283/logo_i50smu.png" alt="" />
            <h2 className="links">Playstation</h2>
            <h2 className="links">Xbox</h2>
            <h2 className="links">Consolas portátiles</h2>
            <Link className="seeCarrito" to={"cart"}>🛒</Link>
        </nav>
    </div>
    );
};
