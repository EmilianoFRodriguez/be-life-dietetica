import React, { useEffect, useState } from "react";
import './style.scss';
import { useParams } from "react-router-dom";

export default function ItemDetailContainer() {
    const [ product, setProduct ] = useState([])
    const [error, setError] = useState(null);
    const { idProduct } = useParams()

    useEffect(()=>{
        const fetchData = ()=> {
            return fetch('https://64092b346ecd4f9e18a9f4d5.mockapi.io/api/v1/products')
            .then((response)=>response.json())
            .then((data)=> {
                const foundProduct = data.find((item)=> item.id == idProduct)
                setProduct(foundProduct)
            })
            .catch((error)=>setError(error))
        }
        fetchData()
    },[idProduct])

    const unity = (product.unity > 15) ? `${product.unit} grs.` : `${product.unit} Unidades.`;

    return (
        <div className='itemDetailContainer'>
            <ul className='itemDetail'>
                {error && <h3>ERROR 404</h3>}
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
                    </div>
                </li>}
            </ul>
        </div>
    )
};