import { Button } from "@mui/material";
import axios from "axios";
import react, { useState, useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
import { publicRequest } from "../requestMethod";
const Pay = () => {
  const KEY =
    "pk_test_51KSOH5SJ3Qu163yRvDRSTElNMPWmYuC9HEzkwA9SJmjaRWk0Em0Ij3wRriZI4HhOXreYizpbOHK4iUpRFdvqwaWV00Yho9dDTa";

  const [stripeToken, setStripeToken] = useState(null);
  const onToken = (token) => {
    console.log(token);
    console.log(token.id);
    setStripeToken(token);
  };
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const response = await axios.post(
          "https://pretty-shop.herokuapp.com/api/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: 2000,
          }
        );
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken]);
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <StripeCheckout
        name="pretty shop"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOnZfr9_PzB3A4DfsipeFqjz7YvalrH45SYA&usqp=CAU"
        billingAddress
        shippingAddress
        description="Your total is $20"
        amount={2000}
        token={onToken}
        stripeKey={KEY}
      >
        <Button>click</Button>
      </StripeCheckout>
    </div>
  );
};

export default Pay;
