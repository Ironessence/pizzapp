import React from 'react';
import {useRef, useEffect} from 'react';
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
import goodbg from '../assets/goodbg.png';

import {gsap} from 'gsap';
import { ScrollTrigger} from 'gsap/ScrollTrigger';




const Homepage = () => {
  
    gsap.registerPlugin(ScrollTrigger);
//GSAP TIMELINE SCROLL--------------------------------
    useEffect(() => {
      gsap.from('#img1', {
        y: -100,
        x: -150,
        duration: 2,
        scrollTrigger: {
          trigger: '#img1',
          start: '30px 30%',
          end: '400px 40%',
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
          end: '400px 40%',
          
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
          end: '400px 40%',
          
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
          end: '400px 40%',
          
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
          end: '400px 40%',
          
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
          end: '400px 40%',
          
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
          end: '400px 40%',
          
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
          end: '400px 40%',
          
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
          end: '400px 40%',
          
          scrub: 1,
        }
      })


    }, [])
//----------------------------------------------------


  return (
        
    <Container>
      <Section1>
      <MainWrapper>
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
      </Section1>
    </Container>
    
  )
}

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
  
  
  
`

const BackgroundImage = styled.img`
  
  
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