import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import LogoImg from '../assets/logo.png';
import { Link, Outlet } from 'react-router-dom';
import CartIconComponent from '../components/CartIconComponent';
import CartDropdown from '../components/CartDropdown';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';



const Navbar = () => {
   
    const {isCartOpen} = useContext(CartContext);
    
  return (
      <>
    <Container>
        <LogoContainer>
        <Link to='/'>
            <Logo src={LogoImg}/>
        </Link>
        </LogoContainer>
        
        <LinksContainer>
        <Link to='/menu'>
            OUR MENU
        </Link>
        <Link to='/auth'>
            SIGN IN
        </Link>
        <Link to='/register'>
            REGISTER
        </Link>
        <CartIconComponent 
               
        />
        </LinksContainer>
        {isCartOpen && <CartDropdown />}
       
    </Container>
    <Outlet />
    </>
  )
}

const LogoContainer = styled.div`
    height: 70px;
    
`

const LinksContainer = styled.div`
    flex: 2;
    align-self: center;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 35px;
    a {
        text-decoration: none;
        color: black;
        cursor: pointer;
        padding: 5px;
        border-radius: 12px;
        transition: 0.5s ease;
        &:hover {
            background-color: #fcdea7;
        }
    }
`

const Logo = styled.img`
    width: 100%;
    height: 70px;
    min-width: 170px;
`

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 70px;
    background-color: transparent;
    display: flex;
    padding: 0px 20px;
    justify-content: space-between;
    box-sizing: border-box;
    
`

export default Navbar