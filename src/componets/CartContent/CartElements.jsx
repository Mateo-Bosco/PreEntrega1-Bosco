import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import "./CartContent.css";

export const CartElements = () => {
    const {cart} = useContext(dataContext);
    return cart.map((product)=>{
        return(
            <div className="cartContent" key={product.id}>
                <img src={product.img} alt="product-card"/>
                <h3 className="nombre">{product.nombre}</h3>
                <h4 className="precio">{product.precio}$</h4>
            </div>
        );
    });
};