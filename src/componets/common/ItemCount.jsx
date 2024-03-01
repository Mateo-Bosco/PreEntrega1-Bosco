import { useState } from "react";

export const ItemCount = ({ stock, initial = 1}) => {
    const [count, setCount] = useState(initial);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
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