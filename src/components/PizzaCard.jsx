import React from 'react';
import styled from 'styled-components';
import {useContext} from 'react';
import { CartContext } from '../contexts/CartContext';

const PizzaCard = ({pizza}) => {
  
    const {image, name, ingredients, price} = pizza;

    const {addItemToCart} = useContext(CartContext);

    const addProductToCart = () => addItemToCart(pizza);
  
    return (
    <Container>
        <PizzaImage src={image}/>
        <PizzaDetails>
            <PizzaName>{name}</PizzaName>
            <PizzaIngredients>{ingredients}</PizzaIngredients>
            <PizzaPrice>$ {price}</PizzaPrice>
            <AddToCartButton onClick={addProductToCart}>ADD TO CART</AddToCartButton>
        </PizzaDetails>
        
    </Container>
  )
}

const AddToCartButton = styled.button`
    background-color: transparent;
    border: 1px solid orange;
    padding: 10px;
    border-radius: 12px;
    transition: 0.4s ease;
    cursor: pointer;
    &:hover {
        background-color: orange;
        color: white;
    }
`

const PizzaPrice = styled.h3`
    text-align: center;
`

const PizzaIngredients = styled.p`
    text-align: center;
`

const PizzaName = styled.h2`
    text-align: center;
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
    @media only screen and (max-width: 650px) {
        width: 70%;
        height: auto;
        object-fit: contain;
        align-self: center;
                
    }
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