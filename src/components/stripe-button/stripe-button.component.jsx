import React from "react";
import StripeCheckout from 'react-stripe-checkout'

const onToken = token => {
    console.log(token)
    alert('Pagamento effettuato')
}

const StripeCheckoutButton = ({ price }) => {
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