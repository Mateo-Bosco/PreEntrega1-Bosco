import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";

export const CartWidget = () => {
    return (
        <Link to="/Cart">
            <div className="div-grande">
                <BsCart2 size={28}/>
                <strong>4</strong>
            </div>
        </Link>
    )
}