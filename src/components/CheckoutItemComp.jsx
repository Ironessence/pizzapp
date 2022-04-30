import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import styled from 'styled-components';
import {motion} from 'framer-motion';

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
        <Decrement onClick={removeItemHandler}>-</Decrement>
        <Quantity>{quantity}</Quantity>
        <Increment onClick={addItemHandler}>+</Increment>
        </QuantityContainer>
        <Price>$ {price}</Price>
        <RemoveButton 
        whileHover={{rotate: 180}}
        transition={{duration: 0.75}}
        onClick={clearItemHandler}>X</RemoveButton>

    </Container>
  )
}

const Description = styled.div`
    display: Flex;
    flex-direction: column;
    text-align: center;
    flex: 1;
        
`

const RemoveButton = styled(motion.span)`
    text-align: center;
    cursor: pointer;
    @media only screen and (max-width: 650px){
        position: absolute;
        top: 5%;
        right: 5%;
    }
`

const Price = styled.h3`
    text-align: center;
    flex: 1;
    padding-right: 10%;
    @media only screen and (max-width: 650px) {
        padding-right: 0;
    }
    
    
`

const Increment = styled.span`
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    background-color: #efefef;
    padding: 5px;
    width: 20px;
    border-radius: 50%;
    text-align: center;
`

const Quantity = styled.h4`
    
`

const Decrement = styled.span`
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    width: 20px;
    text-align: center;
    background-color: #efefef;
    padding: 5px;
    border-radius: 50%;
`

const QuantityContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex: 1;
    box-sizing: border-box;
    @media only screen and (max-width: 650px) {
        width: 30%;
    }
    
    
       

`

const PizzaName = styled.h3`
      
    
`

const Ingredients = styled.span`
    
`

const ProductImage = styled.img`
    min-width: 100px;
    width: 150px;
    
    
    
`

const ImageContainer = styled.div`
    flex: 0.5;
    
`

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 200px;
    border-bottom: 1px solid darkgray;
    padding: 0;
    font-size: 20px;
    width: 80vw;
    @media only screen and (max-width: 650px) {
        flex-direction: column;
        gap: 20px;
        position: relative;
        padding-bottom: 20px;
        
    }

    
`

export default CheckoutItemComp