import React from "react";
import StripeChekout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;

  const publishabelKey = "pk_test_9ZIhbF77dYfRc4JkImTLXsm200P9GZQebc";

  const onToken = token => {
    console.log(token);
    alert("Payment Successful");
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
