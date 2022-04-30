import React from 'react';
import styled from 'styled-components';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { UserContext } from '../contexts/UserContext';
import iconcart from '../assets/carticon.png';


const CartIconComponent = () => {
    
  const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext);
  const {openAccountTab, setOpenAccountTab} = useContext(UserContext);

  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
    if(openAccountTab) {
      setOpenAccountTab(!openAccountTab);
    }
    
  };
  
  return (
    <Container onClick={toggleIsCartOpen}>
        <Image src={iconcart} />
        <Badge>{cartCount}</Badge>
    </Container>
  )
}

const Badge = styled.span`
    font-size: 14px;
    position: absolute;
    right: -20%;
    bottom: 10%;
    padding: 2px 6px;
    background-color: #ffda94;
    border-radius: 50%;
`

const Image = styled.img`
    height: 40px;
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