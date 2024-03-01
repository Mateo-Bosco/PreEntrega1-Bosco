import { useEffect, useState } from "react";
import { ItemDetail } from "../componets/common/ItemDetail";
import { useParams } from "react-router-dom";
import { getProduct } from "../asyncMock";

export const ItemDetailContainer = () => {

    const { id } = useParams();

    const [item, setItem] = useState(null);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getProduct(id)
        .then(resp => {
            setItem(resp);
            setIsLoading(false);
        });
    }, [])

    
    return (
        <>
        {isLoading ? <img className="img-loading" src="https://res.cloudinary.com/dkekabdhg/image/upload/v1709235076/b44e229598a8bdb7f2f432f246fb0813_qfek4q.gif" alt="" /> : <ItemDetail {...item} />}
        </>
    )
}