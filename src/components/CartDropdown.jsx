import React from 'react';
import styled from 'styled-components';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import CartItemComp from './CartItemComp';


const CartDropdown = () => {
    
  const {cartItems} = useContext(CartContext);

    return (
    <Container>
         {cartItems.map((cartItem) => (
           <CartItemComp key={cartItem.id} cartItem={cartItem}/>
         ))}
    </Container>
  )
}

const CartItemQty = styled.span`
  
`

const Increment = styled.span`
  
`

const Decrement = styled.span`
  
`

const CartButtons = styled.div`
  display: flex;
`

const CartItemPrice = styled.h3`
  
`

const CartItemName = styled.h2`
  
`

const CartItemDetails = styled.div`
  display: flex;
  flex-direction: column;
`

const CartItemImage = styled.img`
  width: 25%;
`

const CartItemContainer = styled.div`
  display: flex;
`

const CartText = styled.h3`
  margin-top: 30px;
  text-align: center;
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