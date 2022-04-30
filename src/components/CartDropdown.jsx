import React from 'react';
import styled from 'styled-components';
import { useContext, useRef, useEffect } from 'react';
import { CartContext } from '../contexts/CartContext';
import CartItemComp from './CartItemComp';
import { useNavigate } from 'react-router-dom';


const CartDropdown = () => {
    
  const {cartItems, isCartOpen, setIsCartOpen} = useContext(CartContext);
  const navigate = useNavigate();

  
  const goToCheckoutHandler = () => {
    navigate('/checkout');
    setIsCartOpen(!isCartOpen);
  }

    return (
    <Container>
         {cartItems.map((cartItem) => (
           <CartItemComp key={cartItem.id} cartItem={cartItem}/>
         ))}
         <CheckoutButton onClick={goToCheckoutHandler}>GO TO CHECKOUT</CheckoutButton>
    </Container>
  )
}

const CheckoutButton = styled.button`
  position: absolute;
  bottom: 2%;
  font-size: 16px;
  padding: 10px;
  border-radius: 12px;
  border-style: none;
  background-color: #fed280;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    background-color: orange;
  }
`


const Container = styled.div`
    width: 300px;
    height: 500px;
    z-index: 99;
    background-color: white;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    right: 1%;
    top: 100%;
    
`

export default CartDropdown