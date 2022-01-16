import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { cartContex } from '../../providers/cart/cart.provider'
import CartItem from '../cart-item/cart-item.component'
import CustomButton from '../custom-button/custom-button.component'

import './cart-dropdown.styles.scss'

const CartDropdown = () => {
    const {cartItems, toggleCartHidden} = useContext(cartContex);
    const navigate = useNavigate();
    
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
                navigate(`/checkout`)
                toggleCartHidden()
            }}>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

export default CartDropdown;