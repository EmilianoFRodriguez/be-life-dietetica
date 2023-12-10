import './style.scss';
import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import getSingleItemFromDatabase from "../../firebase/firestoreGetSingle";
import ItemCountDetail from '../ItemCount';
import cartContext from '../../context/cartContext';

export default function ItemDetailContainer() {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const params = useParams();
    const idProduct = params.idProduct;

    const [quantity, setQuantity] = useState(0);
    const { cart, addToCart } = useContext(cartContext);

    useEffect(() => {
        getSingleItemFromDatabase(idProduct)
            .then((productSingle) => { setProduct(productSingle) })
            .catch((error) => setError(error))
            .finally(() => setLoading(false));

    }, []);

    function onAdd(q) {
        setQuantity(q)
        addToCart(product, q)
    }

    const unity = (product.unity > 15) ? `${product.unit} grs.` : `${product.unit} Unidades.`;

    return (
        <div className='itemDetailContainer'>
            <ul className='itemDetail'>
                {loading && <h3>Cargando . . .</h3>}
                {error && alert(error)}
                {<li key={product.id}>
                    <div className='imgContainer'>
                        <img src={product.img} alt={product.name} />
                    </div>
                    <div className='dataContainer'>
                        <div className='detailContainer'>
                            <p>{product.name} x {unity}</p>
                            <p>{product.brand}</p>
                            <p>{product.category}</p>
                            <p>{`$${product.price}`}</p>
                        </div>
                        <ItemCountDetail initial={1} stock={product.stock} onAdd={onAdd} />
                    </div>
                </li>}
            </ul>
        </div>
    )
}