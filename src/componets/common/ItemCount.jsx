import { useState } from "react";

export const ItemCount = ({ stock, onAdd }) => {
    const [count, setCount] = useState(1);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        } else {
            alert("stock maximo")
        }
    };

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        } else {
            alert("No puede ser menos de 1")
        }
    };

    return (
        <>
        <div>
            <div className="div-cuenta">
                <button className="boton-suma" onClick={decrement}>
                    -
                </button>
                <strong>{count}</strong>
                <button className="boton-suma" unClick={increment}>
                    +
                </button>
            </div>
            <button className="comprar">Añadir al carrito</button>
        </div>
        </>
    );
}