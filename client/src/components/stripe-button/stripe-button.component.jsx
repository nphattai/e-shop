import React from "react";
import StripeChekout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;

  const publishabelKey = "pk_test_9ZIhbF77dYfRc4JkImTLXsm200P9GZQebc";

  const onToken = token => {
    axios({
      url: "path",
      method: "post",
      data: {
        amount: priceForStripe,
        token
      }
    })
      .then(response => {
        alert("Payment successful");
      })
      .catch(error => {
        console.log("Payment error: ", error);
        alert(
          "There was an issue with your payment. Please sure you use provided credential invalid"
        );
      });
  };

  return (
    <StripeChekout
      label='Pay Now'
      name='E-Shop'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishabelKey}
    />
  );
};

export default StripeCheckoutButton;
