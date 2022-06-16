import React, {useState} from 'react';
import Video from '../../videos/clasbg.mp4';
import {Button} from '../ButtonElement';
import { 
    HeroContainer, 
    HeroBg, 
    VideoBg, 
    HeroContent, 
    HeroH1, 
    HeroP, 
    HeroBtnWrapper, 
    ArrowForward, 
    ArrowRight
 } from './HeroElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    };


  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
            <HeroH1>Clash of Clans Page</HeroH1>
            <HeroP>
                Inicie sesión para comenzar.
            </HeroP>
            <HeroBtnWrapper>
                <Button 
                    to='/signup' 
                    onMouseLeave={onHover}
                    onMouseEnter={onHover} 
                    primary="true"
                    dark="true"
                >
                    Inicia aquí{ hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection