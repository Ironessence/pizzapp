import React from 'react';
import styled from 'styled-components';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { UserContext } from '../contexts/UserContext';
import iconcart from '../assets/carticon.png';
import { motion } from 'framer-motion';


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
        <Image 
        whileHover={{rotate: 5, x: 10}}
        src={iconcart} />
        <Badge cartCount={cartCount}>{cartCount}</Badge>
    </Container>
  )
}

const Badge = styled.span`
    font-size: 14px;
    position: absolute;
    width: 25px;
    right: -20%;
    bottom: 10%;
    padding: 3px 0px;
    text-align: center;
    background-color: #ffda94;
    border-radius: 50%;
`

const Image = styled(motion.img)`
    height: 40px;
    object-fit: contain;
    cursor: pointer;
`

const Container = styled(motion.div)`
    height: 70px;
    width: auto;
    position: relative;
    display: flex;
    align-items: center;
    
    
    
`

export default CartIconComponent