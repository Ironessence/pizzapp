import React from 'react';
import styled from 'styled-components';
import PizzaImg from '../assets/pizzaslice.png';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';


const CartIconComponent = () => {
    
  const {isCartOpen, setIsCartOpen} = useContext(CartContext);

  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
    console.log(isCartOpen);
  };
  
  return (
    <Container onClick={toggleIsCartOpen}>
        <Image src={PizzaImg} />
        <Badge>2</Badge>
    </Container>
  )
}

const Badge = styled.span`
    font-size: 20px;
    position: absolute;
    right: -10%;
    bottom: 10%;
    padding: 2px 8px;
    background-color: red;
    border-radius: 50%;
`

const Image = styled.img`
    height: 50px;
    object-fit: contain;
    cursor: pointer;
`

const Container = styled.div`
    height: 70px;
    width: auto;
    position: relative;
    display: flex;
    align-items: center;
    
`

export default CartIconComponent