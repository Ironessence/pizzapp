import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Container>
        <LinksContainer>
        <Text1>Our Menu</Text1>
        <Text2>Sign In</Text2>
        <Text3>Register</Text3>
        <Text4>Privacy Policy</Text4>
        <Text5>Terms & Conditions</Text5>
        
        </LinksContainer>
        <SocialsContainer>

        </SocialsContainer>
        <Copyrights>@PizzApp 2022 - All rights reserved.</Copyrights>
    </Container>
  )
}

const Text5 = styled.span`
    text-decoration: underline;
`

const Text4 = styled.span`
    text-decoration: underline;
`

const Text3 = styled.span`
    text-decoration: underline;
`

const Text2 = styled.span`
    text-decoration: underline;
`

const Text1 = styled.span`
    text-decoration: underline;
`

const SocialsContainer = styled.div`
    display: flex;
`

const LinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
    @media only screen and (max-width: 650px) {
        margin-left: 50px;
    }
`

const Copyrights = styled.h3`
    
`

const Container = styled.div`
    width: 100%;
    height: 15vh;
    background-color: #d3eeff;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export default Footer