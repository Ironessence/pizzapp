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
    </Container>
    </>
  )
}

const CheckoutTitle = styled.h1`
  text-align: center;
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
  
  width: 100%;
  
`

const HeaderTitle = styled.span`
  
`

const CheckoutHeader = styled.div`
  width: 100%;
  display: flex;
  font-size: 25px;
  justify-content: space-around;
  padding: 20px 0px;
`

const Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  margin-left: auto;
  margin-right: auto;
  border-radius: 25px;
  margin-top: 5%;
  
`

export default Checkout