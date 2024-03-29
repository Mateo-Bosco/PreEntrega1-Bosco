import { ItemCount } from "./ItemCount";


export const ItemDetail = ({ description, img, price, stock, onAdd }) => {
    return (
        <div className="div-madre">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <img className="img-card" src={img} alt="" />
                    <p className="card-text"> {description} </p>
                    <p>Precio: {price} </p>
                    <ItemCount stock={stock}
                    onAdd={onAdd}
                    />
                </div>
            </div>
        </div>
    );
};