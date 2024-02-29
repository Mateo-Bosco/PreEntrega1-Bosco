import { useState } from "react";
// import { ItemDetail } from "../componets/common/ItemDetail";

export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null);

    
    return (
        <>
        {item && <ItemDetail {...item} />}
        </>
    )
}