import React from 'react';
import styled from 'styled-components';

const PizzaCard = ({pizza}) => {
  return (
    <Container>
        <PizzaImage src={pizza.image}/>
        <PizzaDetails>
            <PizzaName>{pizza.name}</PizzaName>
            <PizzaIngredients>{pizza.ingredients}</PizzaIngredients>
            <PizzaPrice>$ {pizza.price}</PizzaPrice>
            <AddToCartButton>ADD TO CART</AddToCartButton>
        </PizzaDetails>
        
    </Container>
  )
}

const AddToCartButton = styled.button`
    background-color: transparent;
    border: 1px solid orange;
    padding: 5px;
    border-radius: 12px;
    transition: 0.4s ease;
    cursor: pointer;
    &:hover {
        background-color: orange;
    }
`

const PizzaPrice = styled.h3`
    
`

const PizzaIngredients = styled.p`
    
`

const PizzaName = styled.h2`
    
`

const PizzaDetails = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`

const PizzaImage = styled.img`
    flex: 1;
    padding-top: 20px;
`

const Container = styled.div`
    width: 300px;
    height: 550px;
    background-color: white;
    border-radius: 25px;
    margin-top: 90px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
`

export default PizzaCard