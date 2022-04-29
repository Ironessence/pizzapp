import React from 'react';
import styled from 'styled-components';


const CartItemComp = ({cartItem}) => {

    const {name, image, ingredients, price, quantity} = cartItem;

    
  return (
      <Container>
        <PizzaImg src={image}/>
        <PizzaDetails>
        <PizzaName>{name}</PizzaName>
        
        <PizzaQuantity>{quantity} x ${price}</PizzaQuantity>
        </PizzaDetails>
        <RemovePizza>X</RemovePizza>
      </Container>
  )
}

const RemovePizza = styled.span`
  font-size: 25px;
  font-weight: 700;
`

const PizzaQuantity = styled.span`
  
`


const PizzaName = styled.h2`
  
`

const PizzaDetails = styled.div`
  display: flex;
  flex-direction: column;
`

const PizzaImg = styled.img`
  width: 70px;
`

const Container = styled.div`
  width: 100%;
  height: 20%;
  border-bottom: 1px solid lightgray;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

export default CartItemComp;