import React, { useState, useEffect, useContext } from 'react'
import cartContext from '../../context/cartContext';

export default function CheckOut() {

    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [numberPh, setNumberPh] = useState("");
    const [email, setEmail] = useState("");
    const [emailOk, setEmailOk] = useState("");
    const [error, setError] = useState("");
    const [orderId, setOrderId] = useState("");

    const {cart, total, cantidadTotal, clrearCart} = useContext(cartContext)

    function submit(){

    };

    return (
        <div>
            <h2>Ingresa tus datos</h2>
            {cart.map((item)=>{
                <p>
                    {}
                </p>
            })
            }

        </div>
    )
}
