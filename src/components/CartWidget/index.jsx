import React from 'react'
import { BsCart4 } from 'react-icons/bs'
import './style.scss'


export default function CartWidget() {
    return (
        <div className="cart-widget">
            <div>
                <BsCart4 className="icon" />
                <span className="badge">0</span>
            </div>
        </div>
    );
}
