import React from 'react';
import styled from 'styled-components';
import { Link, Outlet } from 'react-router-dom';
import CartIconComponent from '../components/CartIconComponent';
import CartDropdown from '../components/CartDropdown';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { UserContext } from '../contexts/UserContext';
import AccountComponent from '../components/AccountComponent';
import iconaccount from '../assets/accounticon.png';
import iconmenu from '../assets/ourmenuicon.png';
import ProfileComponent from '../components/ProfileComponent';





const Navbar = () => {

   
//GET CONTEXT------------------------------------------------------  
    const {isCartOpen, setIsCartOpen} = useContext(CartContext);
    const {
        currentUser, 
        openAccountTab, 
        setOpenAccountTab,
        openProfileTab,
        setOpenProfileTab,
        
    } = useContext(UserContext);
//------------------------------------------------------------------
    const accountTabOpenHandler = () => {
        setOpenAccountTab(!openAccountTab);
        if(isCartOpen) {
            setIsCartOpen(!isCartOpen);
        }
        
    }

//OPEN PROFILE TAB----------------------------------------
const profileTabOpenHandler = () => {
    setOpenProfileTab(!openProfileTab);
}
//-------------------------------------------------------

    


    
  return (
      <>
    <Container>
        <LogoContainer>
        <Link to='/'>
            <Logo>PIZZAPP</Logo>
        </Link>
        </LogoContainer>
        <LinksContainer>
        <Link to='/menu'>
        <LinkIcon src={iconmenu}/> 
        <LinkText>OUR MENU</LinkText>   
        </Link>
        {!currentUser 
        ? 
        <AccountLinkContainer onClick={accountTabOpenHandler}>
        <LinkIcon src={iconaccount} />
        <Account>
        SIGN IN
        </Account>
        </AccountLinkContainer>
        :
        <AccountLinkContainer onClick={profileTabOpenHandler}>
        <LinkIcon src={iconaccount} />
        <Account>
        ACCOUNT
        </Account>
        </AccountLinkContainer>
        }      
        
        
        {openAccountTab &&  <AccountComponent /> }
        {openProfileTab && <ProfileComponent />}
        
        <CartIconComponent />
        </LinksContainer>
        
        {isCartOpen && <CartDropdown />}
       
    </Container>
    <Outlet />
    </>
  )
}

const AccountLinkContainer = styled.div`
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 7px;
        color: black;
        cursor: pointer;
        padding: 7px;
        border-radius: 12px;
        transition: 0.5s ease;
        &:hover {
            background-color: #fff3de;
        }
`


const LinkText = styled.span`
    @media only screen and (max-width: 650px) {
        display: none;
        }
`


const LinkIcon = styled.img`
    width: 25px;
    
`

const Account = styled.span`
    cursor: pointer;
    border-radius: 12px;
    transition: 0.5s ease;
    
    @media only screen and (max-width: 650px) {
        display: none;
    }
`

const LogoContainer = styled.div`
    height: 70px;
    display: flex;
    align-items: center;
    a {
        text-decoration: none;
    }
    
`

const LinksContainer = styled.div`
    flex: 2;
    align-self: center;
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 35px;
    a {
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 7px;
        color: black;
        cursor: pointer;
        padding: 7px;
        border-radius: 12px;
        transition: 0.5s ease;
        &:hover {
            background-color: #fff3de;
        }
        
    }
    @media only screen and (max-width: 650px) {
        gap: 10px;
    }       
    
`

const Logo = styled.h1`
    font-size: 35px;
    background: -webkit-linear-gradient(63deg, rgba(255,217,75,1) 0%, rgba(255,109,108,1) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
    letter-spacing: 0.2rem;
        
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
    box-shadow: 2px 2px 3px darkgray;
        
`

export default Navbar