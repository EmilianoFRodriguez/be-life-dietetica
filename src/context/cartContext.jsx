import React, { createContext, useState } from 'react'

const cartContext = createContext({ cart: [] });
const Provider = cartContext.Provider;

export function CartContextProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [ totalPriceForItem, setTotalPriceFormItem] = useState()
    // const [total, setTotal] = useState(0);

    function addToCart( item, quantityUser) {
        const newCart = JSON.parse(JSON.stringify(cart));

        if (isInCart(item.id)) {
            let index = cart.findIndex((itemInCart) => itemInCart.id === item.id);
            newCart[index].quantity = newCart[index].quantity + quantityUser;
        } else {
            newCart.push({ ...item, quantity: quantityUser });
        }
        setCart([...newCart]);
    }

    function addItem(item) {
        const newCart = JSON.parse(JSON.stringify(cart));

        if (isInCart(item.id)) {
            let index = cart.findIndex((itemInCart) => itemInCart.id === item.id);
            newCart[index].quantity = newCart[index].quantity + 1;
        }
        setCart([...newCart]);
    };

    function delItem(item) {
        const newCart = JSON.parse(JSON.stringify(cart));

        if (isInCart(item.id)) {
            let index = cart.findIndex((itemInCart) => itemInCart.id === item.id);
            if (newCart[index].quantity > 1) {
                newCart[index].quantity = newCart[index].quantity - 1;
            }
        }
        setCart([...newCart]);
    }

    function isInCart(id) {
        return cart.some((item) => item.id === id)
    }

    function removeItem(item) {
        const newCart = JSON.parse(JSON.stringify(cart));
        if (isInCart(item.id)) {
            newCart.pop({item});
        }
        setCart([...newCart]);
    }

    function getTotalPrice(item) {
        const newCart = JSON.parse(JSON.stringify(cart));
        if (isInCart(item.id)) {
            let index = cart.findIndex((itemInCart) => itemInCart.id === item.id);
            let totalPrice = newCart[index].quantity * newCart[index].price
            setTotalPriceFormItem(totalPrice)
            return(totalPrice)
        }
    }
    const getTotalItems = cart.reduce((acc, product) => {
        return acc + product.quantity;
    }, 0)

    function clearCart() {
        const newCart = [];
        setCart(newCart)

    }


    return (
        <Provider value={{ cart, setCart, addToCart, addItem, delItem, isInCart, removeItem, getTotalPrice, getTotalItems, clearCart }}>
            {children}
        </Provider>
    )
}

export default cartContext;