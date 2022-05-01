import React from 'react';
import {useState} from 'react';
import styled from 'styled-components';
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { Link } from 'react-router-dom';
import SignUpFormComponent from './SignUpFormComponent';
import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from '../utils/firebase';
import {motion} from 'framer-motion';

const defaultFormFields = {
    
    email: '',
    password: '',
    
}
    
const AccountComponent = () => {
//get account tab state from user context-------------------------------
    const {openAccountTab, setOpenAccountTab, openRegisterPopup, setOpenRegisterPopup} = useContext(UserContext);
//----------------------------------------------------------------------
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;
//RESET FORM FIELDS--------------------------------
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }
//----------------------------------------------
//SIGN IN WITH GOOGLE----------------------------
    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
        setOpenAccountTab(!openAccountTab);
    }
//-------------------------------------------------
//ACTUALLY SIGN IN-----------------------------------
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const {user} = await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();
            setOpenAccountTab(!openAccountTab);
        } catch(error) {
            switch(error.code) {
                case 'auth/wrong-password':
                    alert('Incorrect password!');
                    break;
                case 'auth/user-not-found':
                    alert('Account does not exist!');
                    break;
                default:
                    console.log(error)
        }
    }
}
//----------------------------------------------------
//FORM FIELDS CHANGE VALUE--------------------------
const handleChange = (event) => {
    const {name, value} = event.target;

    setFormFields({...formFields, [name]: value})
}
//--------------------------------------------------
//CLOSE ACCOUNT TAB---------------------------------
const toggleCloseAccountTab = () => {
    setOpenAccountTab(!openAccountTab);
}
//---------------------------------------------------
//TOGGLE STATE FOR OPEN REGISTER TAB-------------------
const toggleRegisterTab = () => {
    setOpenRegisterPopup(!openRegisterPopup);
    
}

//-----------------------------------------------------


  return (
    <Container
    initial={{ opacity: 0}}
    animate={{ opacity: 1}}
    transition={{duration: 1, type:'spring'}}
    >
        {!openRegisterPopup 
        ?
        <>
        <Title>Sign In to your account</Title>
        <Form onSubmit={handleSubmit}>
            <Label>E-Mail Address:</Label>
            <FormInput  placeholder='E-Mail Address' type='email' required onChange={handleChange} name='email' value={email}/>
            <Label>Password:</Label>
            <FormInput label='Password' placeholder='Password' type='password' required onChange={handleChange} name='password' value={password} />
            <ButtonsContainer>
            <Button type='submit'>Sign In</Button>
            <GoogleButton type='button' onClick={signInWithGoogle}>Google Sign In</GoogleButton>
            </ButtonsContainer>
            
        </Form>

        <PasswordForgot>
        
            Forgot your password?
        
        </PasswordForgot>
        <AccountRegister>
        <Register onClick={toggleRegisterTab}>Don't have an account?</Register>
        </AccountRegister>
        <CloseSignInPopup 
        whileHover={{rotate: 180}}
        transition={{duration: 0.7}}
        onClick={toggleCloseAccountTab}>X</CloseSignInPopup>
        </>
        :
         <SignUpFormComponent />
        
    }
        
        
    </Container>
  )
}


//STYLED COMPONENTS----------------------------------------------

const Register = styled.span`
    cursor: pointer;
`

const CloseSignInPopup = styled(motion.span)`
    position: absolute;
    right: 5%;
    top: 3%;
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
`

const AccountRegister = styled.div`
    text-align: center;
    margin-top: 20px;
    text-decoration: underline;
`

const PasswordForgot = styled.span`
    text-align: center;
    margin-top: 120px;
    cursor: pointer;
    text-decoration: underline;
`

const GoogleButton = styled.button`
    padding: 10px;
    font-size: 16px;
    background-color: #c5cdff;
    border-style: none;
    border-radius: 12px;
    cursor: pointer;
    transition: 0.5s ease;
    &:hover {
        background-color: #3369e8;
    }
`

const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-evenly;
    
`

const Button = styled.button`
    padding: 10px;
    font-size: 16px;
    background-color: transparent;
    border: 1px solid lightgray;
    border-radius: 12px;
    cursor: pointer;
    transition: 0.5s ease;
    &:hover {
        background-color: orange;
    }
`

const Label = styled.label`
    margin-bottom: 5px;
    text-align: center;
    
`

const FormInput = styled.input`
    padding: 10px 0px;
    margin-bottom: 20px;
    &::-webkit-input-placeholder {
   padding-left: 10px;
  }
    
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding: 0px 20%;
    margin-top: 10%;
`

const Title = styled.h2`
    text-align: center;
    margin-top: 5%;
    font-weight: 400;
`

const Container = styled(motion.div)`
    width: 30%;
    min-width: 400px;
    height: 60vh;
    background-color: white;
    border-radius: 25px;
    position: absolute;
    top: 15vh;
    z-index: 99;
    right: 50%;
    transform: translateX(27%);
    box-shadow: 2px 4px 8px darkgray;
    display: flex;
    flex-direction: column;
    
    
    
`

export default AccountComponent