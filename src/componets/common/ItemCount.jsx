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
        <div className="div-cuenta">
            <div>
                <button className="boton-cuenta" onClick={increment}>
                    +
                </button>
                <strong>{count}</strong>
            </div>
        </div>
    );
}