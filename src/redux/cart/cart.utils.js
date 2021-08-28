export const addItemToCart = (cartItems, newCartItem) => {
    const existingCartItem = cartItems.find( 
        cartItem => cartItem.id === newCartItem.id
    );

    if(existingCartItem){
        return cartItems.map(
            cartItem => cartItem.id === newCartItem.id 
                ?  { ...cartItem, quantity: cartItem.quantity + 1}
                : cartItem
        )
    }
    
    return [...cartItems, {...newCartItem, quantity: 1}];
}

export const removeItemFromCart = (cartItems, removeCartItem) => {
    const existingCartItem = cartItems.find( 
        cartItem => cartItem.id === removeCartItem.id
    );

    if(existingCartItem.quantity === 1){
        return cartItems.filter(item => item.id !== removeCartItem.id)
    }

    return cartItems.map(
        cartItem => cartItem.id === removeCartItem.id 
            ?  { ...cartItem, quantity: cartItem.quantity - 1}
            : cartItem
    )
}