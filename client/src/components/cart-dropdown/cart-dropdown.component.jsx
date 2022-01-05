import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import CartItem from '../cart-item/cart-item.component'
import CustomButton from '../custom-button/custom-button.component'

import './cart-dropdown.styles.scss'

const CartDropdown = () => {

    const cartItems = useSelector(selectCartItems);
    const history = useHistory();
    const dispatch = useDispatch();
    
    return(
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.length === 0 
                        ? <span className='empty-message'>Your cart is empty</span> 
                        : cartItems.map(
                            (item) => <CartItem key={item.id} item={item}></CartItem>
                        )
                }
            </div>
            <CustomButton 
            onClick={() =>{ 
                history.push(`/checkout`)
                dispatch(toggleCartHidden())
            }}>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

export default CartDropdown;