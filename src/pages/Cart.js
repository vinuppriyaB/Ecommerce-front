import react, { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "../component/Navbar";
import Announcement from "../component/Announcement";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import axios from "axios";
import { useHistory } from "react-router";
import "./Cart.css";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import StripeCheckout from "react-stripe-checkout";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { removeProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
const KEY = process.env.STRIPE_KEY;

const Container = styled.div`
  min-height: 100vh;
`;
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;
const Title = styled.div`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;
const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;
const Bottom = styled.div`
  display: flex;
  /* justify-content: space-between; */
  flex-direction: column;

  margin: 0px;
`;

const Cart = () => {
  const history = useHistory();
  const KEY = process.env.STRIPE_KEY;
  const cart = useSelector((state) => state.cart);
  const total = useSelector((state) => state.cart.total);
  const dispatch = useDispatch();
  // console.log(total);
  const [stripeToken, setStripeToken] = useState(null);
  const onToken = (token) => {
    // console.log(token);
    // console.log(token.id);
    setStripeToken(token);
  };
  const handleRemoveCartItem = (product, index) => {
    dispatch(removeProduct({ ...product, index }));
  };
  const handlepayement = async (token) => {
    try {
      const response = await axios.post(
        "https://pretty-shop.herokuapp.com/api/checkout/payment",
        {
          token: token,
          amount: "4500000",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton onClick={() => history.push("/")}>
            CONTINUE SHOPPING
          </TopButton>
          <TopTexts>
            <TopText>Shopping bags (2)</TopText>
          </TopTexts>
          <TopButton type={"filled"}>CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <div className="heading">
            <div>Product</div>
            <div>Discription</div>
            <div>Quantity</div>
            <div>Price</div>
            <div>Remove</div>
          </div>
          <br />
          <hr />
          <br />
          <div>
            {cart.products.map((product, index) => (
              <div className="Product_detailBox" key={index}>
                <div className="product_image">
                  <img
                    src={product.img}
                    height="200px"
                    width="200px"
                    alt={product.title}
                  />
                </div>
                <div className="product_detail">
                  <div>{product.title}</div>

                  <div className="product_quantity">
                    <KeyboardArrowLeftIcon />
                    {product.quantity}
                    <ChevronRightIcon />
                  </div>
                  <div> Rs {product.price * product.quantity}</div>
                  <div>
                    <CloseIcon
                      onClick={() => handleRemoveCartItem(product, index)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="payment">
            <div>Total : {total}</div>
            <StripeCheckout
              name="pretty shop"
              shipping
              billing
              amount="8000000"
              token={handlepayement}
              stripeKey="pk_test_51KZueYSH2RYxFIuZKEKHasyyUS6uiESx38YLiSXkYuTUEv6QSNohg7gkSn17pwbQFpOpUYmAZHI7zD322PgOLT2A00B3o3lPHq"
            >
              <Button variant="contained" className="payment_btn">
                Pay Now
              </Button>
            </StripeCheckout>
          </div>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Cart;

//  <Summary>
//    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
//    <SummaryItem>
//      <SummaryItemText>Subtotal</SummaryItemText>
//      <SummaryItemPrice>Rs {cart.total}</SummaryItemPrice>
//    </SummaryItem>
//    <SummaryItem>
//      <SummaryItemText>Estimated Shipping</SummaryItemText>
//      <SummaryItemPrice>$ 80</SummaryItemPrice>
//    </SummaryItem>
//    <SummaryItem>
//      <SummaryItemText>Shipping Discount</SummaryItemText>
//      <SummaryItemPrice>$ 80</SummaryItemPrice>
//    </SummaryItem>
//    <SummaryItem type="total">
//      <SummaryItemText>Total</SummaryItemText>
//      <SummaryItemPrice>Rs {cart.total}</SummaryItemPrice>
//    </SummaryItem>
//    <StripeCheckout
//      name="pretty shop"
//      amount="10000"
//      token={handlepayement}
//      stripeKey="pk_test_51KSOH5SJ3Qu163yRvDRSTElNMPWmYuC9HEzkwA9SJmjaRWk0Em0Ij3wRriZI4HhOXreYizpbOHK4iUpRFdvqwaWV00Yho9dDTa"
//    >
//      <SummaryButton>CHECKOUT NOW</SummaryButton>
//    </StripeCheckout>
//  </Summary>;

// <Info>
//   {cart.products.map((product) => (
//     <Product>
//       <ProductDetail>
//         <Image src={product.img} />
//         <Details>
//           <ProductName>
//             <b>Product:</b>
//             {product.title}
//           </ProductName>
//           <ProductId>
//             <b>ID:</b>
//             {product._id}
//           </ProductId>
//           <ProductColor color={"black"} />
//           <ProductSize>
//             <b>Size:</b>
//             {product.size}
//           </ProductSize>
//         </Details>
//       </ProductDetail>
//       <PriceDetail>
//         <ProductAmountContainer>
//           <Add />
//           <ProductAmount>{product.quantity}</ProductAmount>
//           <Remove />
//         </ProductAmountContainer>
//         <PrductPrice>
//           Rs {product.price * product.quantity}
//         </PrductPrice>
//       </PriceDetail>
//     </Product>
//   ))}
//   <Hr />
// </Info>;
