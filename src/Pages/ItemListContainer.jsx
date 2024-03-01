import { useEffect, useState } from "react";
import { ItemList} from "../componets/common/ItemList"
import { getProducts } from "../asyncMock";
import "./Item.css"
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
    const { category } = useParams();
    const [products, setProducts] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    useEffect( () => {
        setisLoading(true);
        getProducts()
        .then( resp => {
            if(category) {
                const productsFilter = resp.filter( product => product.category == category );
                setProducts(productsFilter);
            } else {
                setProducts(resp);
            }
            setisLoading(false);
        } )
    }, [category] )

    return (
        <>
            {isLoading ? <img className="img-loading" src="https://res.cloudinary.com/dkekabdhg/image/upload/v1709235076/b44e229598a8bdb7f2f432f246fb0813_qfek4q.gif" alt="" /> : <ItemList products={products} />}
        </>
    );
};