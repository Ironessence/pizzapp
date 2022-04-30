import React from 'react';
import styled from 'styled-components';
import {useContext} from 'react';
import {CartContext} from '../contexts/CartContext';
import CheckoutItemComp from '../components/CheckoutItemComp';

const Checkout = () => {

  const {cartItems, cartTotal} = useContext(CartContext);

  return (
<>
    <CheckoutTitle>Your Cart</CheckoutTitle>
    <Container>
      
      <CheckoutHeader>
      <HeaderTitle>Product</HeaderTitle>
      <HeaderTitle>Description</HeaderTitle>
      <HeaderTitle>Quantity</HeaderTitle>
      <HeaderTitle>Price</HeaderTitle>
      <HeaderTitle>Remove</HeaderTitle>
      </CheckoutHeader>
      <CheckoutItemsContainer>
      {cartItems.map((cartItem) => 
        (<CheckoutItemComp key={cartItem.id} cartItem={cartItem}/>)
      )}
      <Total>Total: $ {cartTotal}</Total>
      </CheckoutItemsContainer>
      <ContinueToPaymentButton>PAYMENT</ContinueToPaymentButton>
    </Container>
    </>
  )
}

const ContinueToPaymentButton = styled.button`
  font-size: 20px;
  padding: 10px;
  margin-left: auto;
  background-color: transparent;
  border: 1px solid orange;
  cursor: pointer;
  border-radius: 12px;
  transition: 0.5s ease;
  font-weight: 300;
  &:hover {
    background-color: orange;
  }
`

const CheckoutTitle = styled.h1`
  text-align: center;
  margin-top: 50px;
`

const Total = styled.span`
  align-self: flex-end;
  padding: 20px;
  font-size: 25px;
  font-weight: 600;
`

const CheckoutItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  
`

const HeaderTitle = styled.span`
  
`

const CheckoutHeader = styled.div`
  width: 100%;
  display: flex;
  font-size: 25px;
  justify-content: space-between;
  padding: 10px 0px;
  border-bottom: 1px solid darkgrey;
  @media only screen and (max-width: 650px) {
    display: none;
  }
`

const Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 50px auto 0;
  padding-bottom: 50px;
  
`

export default Checkout