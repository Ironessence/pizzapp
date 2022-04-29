import React from 'react';
import styled from 'styled-components';
import PizzaCard from '../components/PizzaCard';

const Menu = (props) => {

    const {pizzas} = props;
    
  return (
      <Container>
    
    {pizzas.map(pizza => (
        <PizzaCard key={pizza.id} pizza={pizza}/>
    ))}
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    gap: 25px;
    flex-wrap: wrap;
    justify-content: center;
    
`

export default Menu