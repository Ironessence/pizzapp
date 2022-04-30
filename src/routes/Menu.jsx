import React from 'react';
import styled from 'styled-components';
import PizzaCard from '../components/PizzaCard';
import { motion } from 'framer-motion';

const Menu = (props) => {

    const {pizzas} = props;
    
  return (
      <Container
      initial={{x: -500, opacity: 0}}
      animate={{x: 0, opacity: 1}}
      transition={{duration: 0.75, type:'spring'}}
      >
    
    {pizzas.map(pizza => (
        <PizzaCard key={pizza.id} pizza={pizza}/>
    ))}
    </Container>
  )
}

const Container = styled(motion.div)`
    width: 100%;
    height: auto;
    display: flex;
    gap: 25px;
    flex-wrap: wrap;
    justify-content: center;
    
`

export default Menu