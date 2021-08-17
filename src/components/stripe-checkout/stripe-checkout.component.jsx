import React from "react";
import StripeCheckout from "react-stripe-checkout";

const onToken = (token) => {
  console.log(token);
  alert("payment successful");
};
const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51JPOxvSCzuPIfoUx5vsAh9A3ztQi9cPPhJ2W5rhxaVDW8iEtWe2RV1nnUZfl7HIBVqDDcKSsr7nytUjVFCfTcYYU00XgzSSjZr";
  return (
    <StripeCheckout
      label="pay now"
      name="orange app"
      billingAddress
      shippingAddress
      description={`your total is $${price}`}
      amount={priceForStripe}
      panelLabel="pay now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
