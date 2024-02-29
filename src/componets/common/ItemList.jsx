import { Item } from "./Item";
import "./Product.css"

export const ItemList = ({ products }) => {
    return (
        <>
        <div className="div-padre">
        {products.map((product) => <Item key={product.id} {...product} />)}
        </div>
        </>
    );
};