import React, {useState, useEffect, createContext} from "react";

import {
    addItemToCart, 
    removeItemFromCart, 
    clearItemFromCart,
    getCartTotal,
    getItemsCount
} from './cart.utils';

export const cartContex = createContext({
    cartItems: [],
    addItem: () => {},
    removeItem: () => {},
    clearItem: () => {},
    itemsCount: 0,
    cartTotal: 0,
    hidden: true,
    toggleCartHidden: () => {}
});

const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);
    const [hidden, setHidden] = useState(true);
    const [itemsCount, setItemsCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    const addItem = (item) => setCartItems(addItemToCart(cartItems, item));
    const removeItem = (item) => setCartItems(removeItemFromCart(cartItems, item));
    const clearItem = (item) => setCartItems(clearItemFromCart(cartItems, item));

    const toggleCartHidden = () => setHidden(!hidden);

    useEffect(() => {
        setItemsCount(getItemsCount(cartItems));
        setCartTotal(getCartTotal(cartItems));
    },[cartItems])

    return(
        <cartContex.Provider value={{
            cartItems,
            hidden,
            cartTotal,
            itemsCount,
            addItem,
            removeItem,
            clearItem,
            toggleCartHidden
        }}>
            {children}
        </cartContex.Provider>
    )
}

export default CartProvider;