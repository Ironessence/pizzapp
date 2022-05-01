import React from 'react';
import styled from 'styled-components';
import {useContext, useState} from 'react';
import { UserContext } from '../contexts/UserContext';
import { signOutUser } from '../utils/firebase';
import { auth } from '../utils/firebase';
import { motion } from 'framer-motion';

const ProfileComponent = () => {

    const {openProfileTab, setOpenProfileTab, currentUser} = useContext(UserContext);

    const signOutHandler = () => {
        signOutUser();
        setOpenProfileTab(!openProfileTab);

    }
    

  return (
    <Container
    initial={{y: -40, opacity: 0}}
    animate={{y: 0, opacity: 1}}
    transition={{duration: 0.8, type: 'spring'}}
    >
        <TextWrapper>
        <HelloText>Hello,</HelloText>
        <EmailText>{auth.currentUser.email}</EmailText>
        </TextWrapper>
        
        <SignOutButton onClick={signOutHandler}>SIGN OUT</SignOutButton>
    </Container>
  )
}

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const HelloText = styled.span`
    
`

const SignOutButton = styled.button`
    background-color: transparent;
    font-size: 18px;
    padding: 5px 8px;
    border-radius: 12px;
    border: 1px solid orange;
    transition: 0.5s ease;
    font-weight: 300;
    cursor: pointer;
    &:hover {
        background-color: orange;
    }
`

const EmailText = styled.h3`
    font-size: 16px;
    white-space: pre-wrap;
`

const Container = styled(motion.div)`
    width: 250px;
    height: 120px;
    background-color: white;
    box-shadow: 2px 2px 10px 0px lightgray;
    border-radius: 0px 0px 12px 12px;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    top: 72px;
    right: 1rem;
    box-sizing: border-box;
`

export default ProfileComponent