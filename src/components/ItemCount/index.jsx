import React, { useState } from 'react'
import Button from '../Button'

export default function ItemCountDetail({ initial, stock, onAdd }) {
    const [count, setCount] = useState(initial)

    function increment() {
        if (count < stock) {
            setCount(count + 1)
        }
    };

    function decrement() {
        if (count > initial) {
            setCount(count - 1)
        }
    };

    function addCount(){
        onAdd(count)
    };

    return (
        <div className="counterControl">
            <Button color="red" onTouchButton={() => decrement()}>-</Button>
            {count}
            <Button color="green" onTouchButton={() => increment()}>+</Button>
            <div>
                <Button color="blue" onTouchButton={() => addCount()}>Agregar al carrito</Button>
            </div>
        </div>
    )
}

// export  function ItemCountCart({ quantity, stock }) {
//     const [count, setCount] = useState(quantity)

//     function increment() {
//         if (count < stock) {
//             setCount(count + 1)
//         }
//     };

//     function decrement() {
//         if (count > 1) {
//             setCount(count - 1)
//         }
//     };

//     console.log(quantity);

//     return (
//         <div className="counterControl">
//             <Button color="red" onTouchButton={() => decrement()}>-</Button>
//             {count}
//             <Button color="green" onTouchButton={() => increment()}>+</Button>
//         </div>
//     )
// }





export function ButtonRemoveItem({ removeItemFromCart }) {

    return (
        <Button onTouchButton={() => removeItemFromCart()}>X</Button>
    );
};

export function ButtonClearCart({ clearCart }) {

    return (
        <Button onTouchButton={() => clearCart()}>Vaciar Carrito</Button>
    );
};
