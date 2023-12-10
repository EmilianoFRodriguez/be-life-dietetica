import './style.scss';
import React, { useContext } from "react";
import cartContext from '../../context/cartContext';
import { ButtonRemoveItem } from '../ItemCount';
import Button from '../Button';

export default function CartContainer() {

    const { cart, addItem, delItem, removeItem, getTotalPrice } = useContext(cartContext)

    return (
        <div className="tableContainer">
            <table className="cartList">
                <thead className="cartList_head">
                    <tr className="cartList_row">
                        <th>Producto</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Remover</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((product) => {
                        return (
                            <tr key={product.id} className="cartList_row">
                                <td>
                                    <img height={50} src={product.img} alt={product.name} />
                                </td>
                                <td>{product.name}</td>
                                <td>$ {product.price}</td>
                                <td>
                                    <div className="counterControl">
                                        <Button color="red" onTouchButton={() => delItem(product)}>-</Button>
                                        {product.quantity}
                                        <Button color="green" onTouchButton={() => addItem(product)}>+</Button>
                                    </div>
                                </td>
                                <td>
                                    <ButtonRemoveItem removeItemFromCart={() => removeItem(product)}/>
                                </td>
                                <th>
                                    $ {getTotalPrice(product)}</th>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            <div className="cartListDetail">
                <h3>El total de tu compra es de $ {}</h3>
            </div>
        </div>
    );

}