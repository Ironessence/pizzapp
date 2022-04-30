import React from 'react';
import styled from 'styled-components';
import {useContext} from 'react';
import { CartContext } from '../contexts/CartContext';



const CartItemComp = ({cartItem}) => {

    const {name, image, ingredients, price, quantity} = cartItem;
    const {clearItemFromCart} = useContext(CartContext);

    const clearItem = () => clearItemFromCart(cartItem);

    
  return (
      <Container>
        <PizzaImg src={image}/>
        <PizzaDetails>
        <PizzaName>{name}</PizzaName>
        <PizzaQuantity>
        {quantity} x ${price}
        </PizzaQuantity>
        </PizzaDetails>
        <RemovePizza onClick={clearItem}>X</RemovePizza>
      </Container>
  )
}



const RemovePizza = styled.span`
  font-size: 25px;
  font-weight: 700;
  cursor: pointer;
    
`

const PizzaQuantity = styled.span`
  align-items: center;
  justify-content: space-evenly;
  display: flex;
    
`

const PizzaName = styled.h2`
  
`

const PizzaDetails = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
  align-items: center;
`

const PizzaImg = styled.img`
  width: 70px;
  
`

const Container = styled.div`
  width: 100%;
  height: 15%;
  border-bottom: 1px solid lightgray;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  
  
`

export default CartItemComp;