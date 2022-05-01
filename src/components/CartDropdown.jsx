import React from 'react';
import styled from 'styled-components';
import { useContext, useRef, useEffect } from 'react';
import { CartContext } from '../contexts/CartContext';
import CartItemComp from './CartItemComp';
import { useNavigate } from 'react-router-dom';
import { motion} from 'framer-motion';


const CartDropdown = () => {
    
  const {cartItems, isCartOpen, setIsCartOpen} = useContext(CartContext);
  const navigate = useNavigate();

  
  const goToCheckoutHandler = () => {
    navigate('/checkout');
    setIsCartOpen(!isCartOpen);
  }

    return (
              
    <Container
    initial={{x: 300, opacity: 0}}
    animate={{x: 0, opacity: 1}}
    
    transition={{duration: 0.7, type:'spring'}}
    
    >
         {cartItems.map((cartItem) => (
           <CartItemComp key={cartItem.id} cartItem={cartItem}/>
         ))}
         <CheckoutButton onClick={goToCheckoutHandler}>GO TO CHECKOUT</CheckoutButton>
         <CloseCartButton 
         whileHover={{ rotate: 180}}
         transition={{duration: 0.7}}
         onClick={() => setIsCartOpen(!isCartOpen)}>&#10005;</CloseCartButton>
    </Container>
    
  )
}

const CloseCartButton = styled(motion.span)`
  position: absolute;
  top: 40%;
  left: -12%;
  font-size: 30px;
  font-weight: 700;
  cursor: pointer;
`

const CheckoutButton = styled.button`
  position: absolute;
  bottom: 2%;
  font-size: 16px;
  padding: 10px;
  border-radius: 12px;
  border-style: none;
  background-color: #fed280;
  font-weight: 500;
  cursor: pointer;
  transition: 0.5s ease;
  &:hover {
    background-color: orange;
  }
`


const Container = styled(motion.div)`
    width: 300px;
    height: calc(100vh - 70px);
    top: 72px;
    z-index: 99;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    right: 0;
    box-shadow: -6px 0px 10px 1px #aaaaaa;
    
    
`

export default CartDropdown