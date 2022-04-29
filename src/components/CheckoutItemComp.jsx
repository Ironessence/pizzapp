import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import styled from 'styled-components';

const CheckoutItemComp = ({cartItem}) => {

    const {name, image, price, quantity, ingredients} = cartItem;

    const {clearItemFromCart, addItemToCart, removeItemFromCart} = useContext(CartContext);

    const clearItemHandler = () => clearItemFromCart(cartItem);
    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemFromCart(cartItem);

  return (
    <Container>
        <ImageContainer>
            <ProductImage src={image}/>
        </ImageContainer>
        <Description>
        <PizzaName>{name}</PizzaName>
        <Ingredients>{ingredients}</Ingredients>
        </Description>
           
        <QuantityContainer>
        <Decrement>-</Decrement>
        <Quantity>{quantity}</Quantity>
        <Increment onClick={addItemHandler}>+</Increment>
        </QuantityContainer>
        <Price>{price}</Price>
        <RemoveButton onClick={clearItemHandler}>X</RemoveButton>

    </Container>
  )
}

const Description = styled.div`
    display: Flex;
    flex-direction: column;
    flex-basis: 20%;
    text-align: center;
    
`

const RemoveButton = styled.span`
    flex-basis: 20%;
    text-align: center;
    cursor: pointer;
`

const Price = styled.h3`
    flex-basis: 20%;
    text-align: center;
`

const Increment = styled.span`
    cursor: pointer;
`

const Quantity = styled.h4`
    
`

const Decrement = styled.span`
    
`

const QuantityContainer = styled.div`
    flex-basis: 20%;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    

`

const PizzaName = styled.h3`
    
`

const Ingredients = styled.span`
    
`

const ProductImage = styled.img`
    min-width: 30%;
    width: 200px;
    
`

const ImageContainer = styled.div`
    flex: 1;
    flex-basis: 20%;
    padding-left: 20px;
    
    
`

const Container = styled.div`
    display: flex;
    align-items: center;
    
`

export default CheckoutItemComp