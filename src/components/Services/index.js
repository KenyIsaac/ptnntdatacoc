import React from 'react';
import Icon1 from '../../images/coc04.jpg'
import Icon2 from '../../images/coc05.jpg'
import Icon3 from '../../images/coc06.jpg'
import {
ServicesContainer,
ServicesH1,
ServicesWrapper,
ServicesCard,
ServicesIcon,
ServicesH2,
ServicesP
} from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id="services">
        <ServicesH1>Conoce Los clanes</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>Identifica tu clan</ServicesH2>
                <ServicesP>Aquí conoce cómo va tu clan</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>Arma estrategias</ServicesH2>
                <ServicesP>Conoce las estructuras disponibles</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>Mejora tu aldea</ServicesH2>
                <ServicesP>Descubre cómo ser el mejor</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    
    </ServicesContainer>
  )
}

export default Services