import React from 'react'
import { ServicesCard, ServicesContainer, ServicesH1, ServicesH2, ServicesCardH2, ServicesH3, ServicesWrapper, ServicesIcon, ServicesP } from './ServicesElements'
import Icon1 from '../../images/undraw_color_palette_yamk.svg'
import Icon2 from '../../images/svg1.svg'
import Icon3 from '../../images/undraw_new_ideas_jdea.svg'
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';

const Services = () => {
    return (
        <ServicesContainer>
            <ServicesH1>
                <Slide bottom cascade>
                    Servicios
                </Slide>
            </ServicesH1>
            <ServicesH2>
                <Slide bottom cascade>
                    ASESORAMIENTO
                </Slide>
            </ServicesH2>
            <ServicesH3>
                <Slide bottom cascade>
                    BUSCAMOS LA MEJOR SOLUCIÓN PARA SU PROYECTO
                </Slide>
            </ServicesH3>
                <ServicesWrapper>
            <Fade left cascade>
                    <ServicesCard>
                        <ServicesIcon src={Icon1}/>
                        <ServicesCardH2>Personalización</ServicesCardH2>
                        <ServicesP>de nuestros productos para que cumplan con sus especificaciones exactas. </ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon2}/>
                        <ServicesCardH2>Desarrollo</ServicesCardH2>
                        <ServicesP> de sus proyectos ya existentes</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon3}/>
                        <ServicesCardH2>Creación</ServicesCardH2>
                        <ServicesP>de diseños únicos, especialmente pensados para usted.</ServicesP>
                    </ServicesCard>
            </Fade>
                </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
