import React from "react";
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

const StripeCheckoutButton = ({ price }) => {
    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token,
            }
        }).then(response => {
            alert('payment successful');
        }).catch(error => {
            console.error('Payment error: ' + JSON.parse(error));
            alert('payment failed');
        })
    }
    
    const priceForStripe = price * 100; // stripe vuole la valuta con i centesimi
    const publicKey = "pk_test_51JW1duAysCkDeaJTRPVj2G9at05cUdrtmrHMF80HuqUBrTcG5c1wBaT3TLtTNmykPetDNMP7Q7cEhNQ0BRmvTdC700PbUCgQNF"

    return (
        <StripeCheckout 
            currency="EUR"
            label='Pay Now'
            name="CRWN Clothing srl"
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/_qe.svg"
            description={`Your total is €${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publicKey}
        />
    )

}

export default StripeCheckoutButton