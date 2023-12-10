import React, { useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import getItemsFromDatabase from "../../firebase/firestoreGetAll";
import getItemsByCategoryFromDatabase from "../../firebase/firestoreGetCategory";
import './style.scss';


export default function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const params = useParams();
    const idCategory = params.idCategory;
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    async function allOrCategory() {
      if (idCategory === undefined) {
        const response1 = await getItemsFromDatabase();
        setProducts(response1);
      } else {
        const response2 = await getItemsByCategoryFromDatabase(idCategory);
        setProducts(response2);
      }
    }
  
    useEffect(() => {
      allOrCategory()
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    }, [idCategory]);
  
    return (
      <div className='productsContainer'>
        <div className='titleContainer'>
          <h2>PRODUCTOS</h2>
        </div>
        <div className='itemListContainer'>
          <ul className='itemList'>
            {loading && <h3>Cargando . . .</h3>}
            {error && <h3>ERROR 404</h3>}
            {products?.map((producto) => (
              <li key={producto.id}>
                <div className='imgContainer'>
                  <img src={producto.img} alt={producto.name} />
                </div>
                <p>{producto.name}</p>
                <p>{`$${producto.price}`}</p>
                <Link to={`/detalle/${producto.id}`}>
                  <button className='buttonDetail'>Detalle</button>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  