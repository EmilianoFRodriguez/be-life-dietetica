import React from "react";
import './style.scss';
import useFetch from "../../assets/UseFetch";
import { Link } from "react-router-dom";

export default function ItemListContainer() {
    const { dataApi, loading, error } = useFetch('https://64092b346ecd4f9e18a9f4d5.mockapi.io/api/v1/products')

    return (
        <div className='productsContainer'>
            <div className='titleContainer'>
                <h2>PRODUCTOS</h2>
            </div>
            <div className='itemListContainer'>
                <ul className='itemList'>
                    {loading && <h3>Cargando . . .</h3>}
                    {error && <h3>ERROR 404</h3>}
                    {dataApi?.map((producto) => (
                        <li>
                            <div className='imgContainer'>
                                <img src={producto.img} alt={producto.name}></img>
                            </div>
                            <p>{producto.name}</p>
                            <p>{`$${producto.price}`}</p>
                            <Link to={`/detalle/${producto.id}`} className="button">
                                <button className='buttonDetal'>Detalle</button>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
};