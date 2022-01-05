import React from 'react'
import { useSelector } from 'react-redux';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../checkout-item/checkout-item.component';

import './checkout.styles.scss'

const CheckoutPage = () => {
    const cartItems = useSelector(selectCartItems);
    const total = useSelector(selectCartTotal);

    return(
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.length 
                    ? cartItems.map((item) => <CheckoutItem key={item.id} cartItem={item}/>)
                    : <span>Your cart is empty</span>
            }        
            <div className="total">
                <span>TOTAL: &euro; {total}</span>
            </div>
            <div>
                <span>4000003800000008</span>
            </div>
            <StripeCheckoutButton price={total}/>
        </div>
    )
}

export default CheckoutPage;