import React from 'react'
import { ServicesCard, ServicesContainer, ServicesH1, ServicesH2, ServicesCardH2, ServicesH3, ServicesWrapper, ServicesIcon, ServicesP } from './ServicesElements'
import Icon1 from '../../images/undraw_color_palette_yamk.svg'
import Icon2 from '../../images/svg1.svg'
import Icon3 from '../../images/undraw_new_ideas_jdea.svg'

const Services = () => {
    return (
        <ServicesContainer>
            <ServicesH1>Servicios</ServicesH1>
            <ServicesH2>ASESORAMIENTO</ServicesH2>
            <ServicesH3>BUSCAMOS LA MEJOR SOLUCIÓN PARA SU PROYECTO</ServicesH3>
            <ServicesWrapper>
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
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
