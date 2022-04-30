import React from 'react';
import styled from 'styled-components';
import { useState, useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../utils/firebase';
import leftarrowimg from '../assets/leftarrow.png';
import { motion } from 'framer-motion';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUpFormComponent = () => {

    const {openRegisterPopup, setOpenRegisterPopup, openAccountTab, setOpenAccountTab} = useContext(UserContext);
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        try{
            const {user} = await createAuthUserWithEmailAndPassword(email, password);

            await createUserDocumentFromAuth(user, {displayName});
            resetFormFields();
            setOpenRegisterPopup(!openRegisterPopup);
            alert('Account created successfully! You are now signed in!');

        } catch(error) {
            if(error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, E-mail already in use!')
            } else {
                console.log('user creation error', error);
            }
        }

    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    }

    const toggleCloseAccountTab = () => {
        setOpenAccountTab(!openAccountTab);
        setOpenRegisterPopup(!openRegisterPopup);
    }

    const toggleBackToSignIn = () => {
        setOpenRegisterPopup(!openRegisterPopup);
    }

  return (
      <>
        
        <Title>Create an account</Title>
        <RegisterForm onSubmit={handleSubmit}>
        <RegisterLabel>Display Name:</RegisterLabel>
        <RegisterInput placeholder='Display Name' type='text' required onChange={handleChange} name='displayName' value={displayName}/>
        <RegisterLabel>E-Mail Address:</RegisterLabel>
        <RegisterInput placeholder='E-Mail Address' type='email' required onChange={handleChange} name='email' value={email}/>
        <RegisterLabel>Password:</RegisterLabel>
        <RegisterInput placeholder='Password' type='password' required onChange={handleChange} name='password' value={password}/>
        <RegisterLabel>Confirm Password:</RegisterLabel>
        <RegisterInput placeholder='Confirm Password' type='password' required onChange={handleChange} name='confirmPassword' value={confirmPassword}/>
        <PolicyText>By registering, you agree to our <b>Privacy Policy</b> and <b>Terms and Conditions</b></PolicyText>
        <SignUpButton type='submit'>Create Account</SignUpButton>
        </RegisterForm>
        <BackToSignIn 
        whileHover={{x: -10}}
        transition={{duration: 0.7}}
        src={leftarrowimg} onClick={toggleBackToSignIn} />
        <CloseSignInPopup 
        whileHover={{rotate: 180}}
        transition={{duration: 0.7}}
        onClick={toggleCloseAccountTab}>X</CloseSignInPopup>
    </> 
  )
}

const BackToSignIn = styled(motion.img)`
    position: absolute;
    width: 25px;
    top: 3%;
    left: 5%;
    cursor: pointer;
`

const PolicyText = styled.p`
    font-size: 12px;
    font-weight: 400;
`

const SignUpButton = styled.button`
    padding: 10px;
    font-size: 16px;
    background-color: transparent;
    border: 1px solid lightgray;
    border-radius: 12px;
    cursor: pointer;
    transition: 0.5s ease;
    margin-top: 20px;
    &:hover {
        background-color: orange;
    }
`

const RegisterInput = styled.input`
    padding: 10px 0px;
    margin-bottom: 20px;
    &::-webkit-input-placeholder {
   padding-left: 10px;
    }
`

const RegisterLabel = styled.label`
     margin-bottom: 5px;
    text-align: center;
`

const RegisterForm = styled.form`
    display: flex;
    flex-direction: column;
    padding: 0px 20%;
    margin-top: 10%;
`

const CloseSignInPopup = styled(motion.span)`
    position: absolute;
    right: 5%;
    top: 3%;
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
`

const Title = styled.h2`
    text-align: center;
    margin-top: 5%;
    font-weight: 400;
    margin-bottom: -20px;
`



export default SignUpFormComponent