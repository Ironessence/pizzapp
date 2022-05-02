import React from 'react';
import {useEffect} from 'react';
import styled from 'styled-components';
import img1 from '../assets/section_1_01.webp';
import img2 from '../assets/section_1_02.webp';
import img3 from '../assets/section_1_03.webp';
import img4 from '../assets/section_1_04.webp';
import img5 from '../assets/section_1_05.webp';
import img6 from '../assets/section_1_06.webp';
import img7 from '../assets/section_1_07.webp';
import img8 from '../assets/section_1_08.webp';
import img9 from '../assets/section_1_09.webp';
import pizza1 from '../assets/section_3_01.webp';
import pizza2 from '../assets/section_3_02.webp';
import pizza3 from '../assets/section_3_03.webp';
import pizza4 from '../assets/section_3_04.webp';
import pizza5 from '../assets/section_3_05.webp';
import pizza6 from '../assets/section_3_06.webp';
import goodbg from '../assets/goodbg.png';
import Footer from './Footer';

import {gsap} from 'gsap';
import { ScrollTrigger} from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';





const Homepage = () => {
  
    gsap.registerPlugin(ScrollTrigger);
//GSAP TIMELINE SCROLL--------------------------------
    useEffect(() => {
      gsap.from('#wrapper', {
             
        duration: 2,
        scrollTrigger: {
          trigger: '#img1',
          start: '30px 40%',
          end: '500px 40%',
          scrub: 1,
          
          pin: '#wrapper',
        }
      })
      gsap.from('#img1', {
        y: -100,
        x: -150,
        duration: 2,
        scrollTrigger: {
          trigger: '#img1',
          start: '30px 30%',
          end: '600px 40%',
          
          scrub: 1,
        }
      })
      gsap.from('#img2', {
        y: -150,
        x: -230,
        duration: 2,
        scrollTrigger: {
          trigger: '#img1',
          start: '30px 30%',
          end: '600px 40%',
          scrub: 1,
        }
      })
      gsap.from('#img3', {
        y: -80,
        x: -80,
        duration: 2,
        scrollTrigger: {
          trigger: '#img1',
          start: '30px 30%',
          end: '600px 40%',
          
          scrub: 1,
        }
      })
      gsap.from('#img4', {
        y: -150,
        x: -120,
        duration: 2,
        scrollTrigger: {
          trigger: '#img1',
          start: '30px 30%',
          end: '600px 40%',
          
          scrub: 1,
        }
      })
      gsap.from('#img5', {
        y: -80,
        x: -100,
        duration: 2,
        scrollTrigger: {
          trigger: '#img1',
          start: '30px 30%',
          end: '600px 40%',
          
          scrub: 1,
        }
      })
      gsap.from('#img6', {
        y: -100,
        x: -150,
        duration: 2,
        scrollTrigger: {
          trigger: '#img1',
          start: '30px 30%',
          end: '600px 40%',
          
          scrub: 1,
        }
      })
      gsap.from('#img7', {
        y: -20,
        x: -100,
        duration: 2,
        scrollTrigger: {
          trigger: '#img1',
          start: '30px 30%',
          end: '600px 40%',
          
          scrub: 1,
        }
      })
      gsap.from('#img8', {
        y: 10,
        x: -170,
        duration: 2,
        scrollTrigger: {
          trigger: '#img1',
          start: '30px 30%',
          end: '600px 40%',
          
          scrub: 1,
        }
      })
      gsap.from('#img9', {
        y: 70,
        x: -100,
        duration: 2,
        scrollTrigger: {
          trigger: '#img1',
          start: '30px 30%',
          end: '600px 40%',
          
          scrub: 1,
        }
      })
      gsap.from('#pizza1', {
        y: -150,
        duration: 2,
        scrollTrigger: {
          trigger: '#pizza1',
          start: '10px 30%',
          end: '500px 40%',
          scrub: 1,
          
        }
      })
      gsap.from('#pizza2', {
        y: -100,
        duration: 2,
        scrollTrigger: {
          trigger: '#pizza1',
          start: '10px 30%',
          end: '500px 40%',
          scrub: 1,
          
        }
      })
      gsap.from('#pizza3', {
        y: -50,
        duration: 2,
        scrollTrigger: {
          trigger: '#pizza1',
          start: '10px 30%',
          end: '500px 40%',
          scrub: 1,
          
        }
      })
      gsap.from('#pizza4', {
        y: 0,
        duration: 2,
        scrollTrigger: {
          trigger: '#pizza1',
          start: '10px 30%',
          end: '500px 40%',
          scrub: 1,
          
        }
      })
      gsap.from('#pizza5', {
        y: 50,
        duration: 2,
        scrollTrigger: {
          trigger: '#pizza1',
          start: '10px 30%',
          end: '500px 40%',
          scrub: 1,
          
        }
      })
      gsap.from('#pizza6', {
        y: 100,
        duration: 2,
        scrollTrigger: {
          trigger: '#pizza1',
          start: '10px 30%',
          end: '500px 40%',
          scrub: 1,
          
        }
      })
      


    }, [])
//----------------------------------------------------


  return (
        
    <Container>
      <Section1>
        <Section1Title1>The real italian pizza</Section1Title1>
        <Section1Title2>made by real Italian Chefs</Section1Title2>
        <Section1Button>
          <Link to='/menu'>
          OUR MENU
          </Link>
          </Section1Button>
      <MainWrapper id='wrapper'>
        <BackgroundImage id='bg' src={goodbg}/>
        <ImagesWrapper id='img-wrapper'>
        <Image1 id='img1' src={img1}/>
        <Image2 id='img2' src={img2}/>
        <Image3 id='img3' src={img3}/>
        <Image4 id='img4' src={img4}/>
        <Image5 id='img5' src={img5}/>
        <Image6 id='img6' src={img6}/>
        <Image7 id='img7' src={img7}/>
        <Image8 id='img8' src={img8}/>
        <Image9 id='img9' src={img9}/>
        </ImagesWrapper>
      </MainWrapper>
      <Section1ClipPathFooter>

      </Section1ClipPathFooter>
      </Section1>
      <Section2>
        <PizzaImagesContainer id='wrapper2'>
        <Pizza6Img id='pizza6' src={pizza6}/>
        <Pizza5Img id='pizza5' src={pizza5}/>
        <Pizza4Img id='pizza4' src={pizza4}/>
        <Pizza3Img id='pizza3' src={pizza3}/>
        <Pizza2Img id='pizza2' src={pizza2}/>
        <Pizza1Img id='pizza1' src={pizza1}/>
           
        </PizzaImagesContainer>
        <HighlightsContainer
        initial={{x: -200, opacity: 0}}
        whileInView={{x: 0, opacity: 1}}
        transition={{duration: 2.2, type: 'spring'}}
        >
        <Section2Text1>Always fresh ingredients</Section2Text1>
        <Section2Text2>Best price guarantee</Section2Text2>
        <Section2Text3>Real, italian recipes</Section2Text3>
        <Section2Text4>High-end, last generation ovens</Section2Text4>
        
        </HighlightsContainer>

      </Section2>
      <Footer />
      
    </Container>
    
  )
}

const Section2Text1 = styled.h2`
  font-weight: 400;
`

const Section2Text2 = styled.h2`
  font-weight: 400;
`

const Section2Text3 = styled.h2`
  font-weight: 400;
`

const Section2Text4 = styled.h2`
  font-weight: 400;
`

const Pizza1Img = styled.img`
  position: absolute;
  left: 5%;
`

const Pizza2Img = styled.img`
  position: absolute;
  left: 5%;
`

const Pizza3Img = styled.img`
  position: absolute;
  left: 5%;
`

const Pizza4Img = styled.img`
  position: absolute;
  left: 5%;
`

const Pizza5Img = styled.img`
  position: absolute;
  left: 5%;
`

const Pizza6Img = styled.img`
  position: absolute;
  left: 5%;
`

const HighlightsContainer = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-top: 600px;
  height: 350px;
  justify-content: space-between;
  margin-left: 50px;
  @media only screen and (max-width: 650px) {
    margin-top: 100px;
    padding-bottom: 100px;
  }
  
`

const PizzaImagesContainer = styled.div`
  flex: 1;
  flex-direction: column;
  align-items: center;
  margin-top: 650px;
  
  
`

const Section2 = styled.div`
  width: 100%;
  height: 150vh;
  display: flex;
  @media only screen and (max-width: 650px) {
    flex-direction: column;
  }
  
`

const Section1ClipPathFooter = styled.div`
  background-color: #d3eeff;
  width: 100%;
  height: 50vh;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 33%);
  position: absolute;
  bottom: -40%;
    
  
`

const Section1Button = styled.button`
  position: absolute;
  z-index: 99;
  top: 105%;
  font-size: 16px;
  padding: 7px;
  background-color: transparent;
  border: 1px solid orange;
  border-radius: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.5s ease;
  &:hover {
    background-color: orange;
    a {
      color: white;
    }
  }
  a {
    text-decoration: none;
    color: black;
    transition: 0.5s ease;
  }
`

const Section1Title2 = styled.h1`
  position: absolute;
  z-index: 99;
  top: 100%;
  color: white;
  text-shadow: 1px 1px 2px darkgray;
  font-weight: 400;
  letter-spacing: 0.1rem;
`

const Section1Title1 = styled.h1`
  position: absolute;
  z-index: 99;
  top: 15%;
  color: white;
  text-shadow: 1px 1px 2px darkgray;
  font-weight: 400;
  letter-spacing: 0.1rem;
`

const Image1 = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
`

const Image2 = styled.img`
  position: absolute;
  top: 80px;
  right: 130px;
`

const Image3 = styled.img`
  position: absolute;
  top: 100px;
  right: 10px;
`

const Image4 = styled.img`
  position: absolute;
  top: 200px;
  right: 120px;
`

const Image5 = styled.img`
  position: absolute;
  top: 225px;
  right: 150px;
`

const Image6 = styled.img`
  position: absolute;
  top: 170px;
  right: 210px;
`

const Image7 = styled.img`
  position: absolute;
  top: 250px;
  right: 10px;
`

const Image8 = styled.img`
  position: absolute;
  top: 320px;
  right: 110px;
`

const Image9 = styled.img`
  position: absolute;
  top: 360px;
  right: 10px;
`

const ImagesWrapper = styled.div`
  position: absolute;
  width: 400px;
  left: calc(50% - 400px);
  height: 530px;
  top: 370px;
  @media only screen and (max-width: 650px) {
    top: 340px;
  }
    
`

const BackgroundImage = styled.img`
    @media only screen and (max-width: 650px) {
      height: 120vh;
    }
`

const MainWrapper = styled.div`
  position: absolute;
`

const Section1 = styled.div`
  width: 100%;
  height: 150vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  position: relative;
      
`

const Container = styled.div`
  width: 100%;
  height: 200vh;
`

export default Homepage