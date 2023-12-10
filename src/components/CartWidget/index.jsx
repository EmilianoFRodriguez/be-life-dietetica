import React, { useContext } from 'react'
import { BsCart4 } from 'react-icons/bs'
import './style.scss'
import cartContext from '../../context/cartContext';


export default function CartWidget() {
    const { getTotalItems } = useContext(cartContext);

    return (
        <div className="cart-widget">
            <div>
                <BsCart4 className="icon" />
                <span className="badge">{getTotalItems}</span>
            </div>
        </div>
    );
}