import React from 'react';
import styled from 'styled-components';
import PizzaImg from '../assets/pizzaslice.png';


const CartIconComponent = ({onPress}) => {
    
  
  return (
    <Container onClick={onPress}>
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