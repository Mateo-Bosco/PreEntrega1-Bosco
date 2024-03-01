import { Link } from "react-router-dom";
import "./product.css"

export const Item = ({ id, name, img, description }) => {
    return (
        <div className="div-madre">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <img className="img-card" src={img} alt="" />
                    <p className="card-text"> {description} </p>
                    <Link to={`/item/${id}`}>
                        <button className="boton">Detalles</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};