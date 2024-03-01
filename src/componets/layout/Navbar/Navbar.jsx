import { Link } from "react-router-dom";
import "./Navbar.css"
import { Art } from "../../../Pages/Art/Articulos";
import { CartWidget } from "../../common/CartWidget";

export const Navbar = ()=>{
    return ( 
    <div className="nav-container">
        <nav className="navbar">
            <Link to={"/"}>
                <img className="navbar-logo" src="https://res.cloudinary.com/dkekabdhg/image/upload/v1707349283/logo_i50smu.png" alt="" />
            </Link>
            <Link className="links" to="/Art">Nuestros productos</Link>
            <Link className="links" to="/category/playstation">Playstation</Link>
            <Link className="links" to="/category/xbox">Xbox</Link>
            <Link className="links" to="/category/portatil">Consolas portátiles</Link>
            <div className="cart-navbar">
                <CartWidget/>
            </div>
        </nav>
    </div>
    );
};
