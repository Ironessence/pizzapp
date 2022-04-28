import React from 'react';
import Navbar from './Navbar';
import styled from 'styled-components';

const Homepage = () => {
  return (
    <>
    <Navbar />
    <Container>Homepage</Container>
    </>
  )
}

const Container = styled.div`
  width: 100%;
  height: 200vh;
`

export default Homepage