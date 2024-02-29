import { useContext } from "react"
import { dataContext } from "../Context/DataContext"

export const CartTotal = () => {
    const { cart } = useContext(dataContext);

    const total = cart.reduce((acc, el)=> acc + el.precio, 0);
    return (
    <div className="cartTotal">
        <h3>Total a pagar: { total } $</h3>
    </div>
    );
};