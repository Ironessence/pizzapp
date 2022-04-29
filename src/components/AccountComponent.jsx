import React from 'react';
import {useRef, useEffect} from 'react';
import styled from 'styled-components';
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from '../utils/firebase';


const defaultFormFields = {
    
    email: '',
    password: '',
    
}

//WORK HERE ON THE SIGN IN COMP!! to-do

const AccountComponent = () => {


//FUNCTION TO CLOSE ACCOUNT TAB IF CLICK OUTSIDE-----------------
    const useOutsideAlert = (ref) => {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setOpenAccountTab(!openAccountTab);
                    
                }
            }
    
            document.addEventListener('mousedown', handleClickOutside);
            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }, [ref]);
    }
//---------------------------------------------------------------
//WRAPPER REF FOR ACCOUNT CLICK OUTSIDE---------------------------
    const wrapperRef = useRef(null);
    useOutsideAlert(wrapperRef);
    const {openAccountTab, setOpenAccountTab} = useContext(UserContext);
//----------------------------------------------------

  return (
    <Container ref={wrapperRef}>AccountComponent</Container>
  )
}


//STYLED COMPONENTS----------------------------------------------
const Container = styled.div`
    width: 30%;
    min-width: 400px;
    height: 50vh;
    background-color: white;
    border-radius: 25px;
    position: absolute;
    top: 15vh;
    z-index: 99;
    right: 50%;
    transform: translateX(50%);
    box-shadow: 2px 4px 8px darkgray;
    
`

export default AccountComponent