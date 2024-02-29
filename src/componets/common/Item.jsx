import "./product.css"

export const Item = ({ name, img, description }) => {
    return (
        <div className="div-madre">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <img className="img-card" src={img} alt="" />
                    <p className="card-text"> {description} </p>

                    <button className="boton">Comprar</button>
                </div>
            </div>
        </div>
    );
};