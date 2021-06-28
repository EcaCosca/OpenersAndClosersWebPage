import React from 'react'
import { ServicesCard, ServicesContainer, ServicesH1, ServicesH2, ServicesWrapper, ServicesIcon, ServicesP } from './ServicesElements'
import Icon1 from '../../images/svg1.svg'
import Icon2 from '../../images/svg1.svg'
import Icon3 from '../../images/svg1.svg'

const Services = () => {
    return (
        <ServicesContainer>
            <ServicesH1>Servicios</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>

                    <ServicesH2>Servicios</ServicesH2>
                    <ServicesP>Secure locking solutions Secure locking solutions Secure locking solutions </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>

                    <ServicesH2>Servicios</ServicesH2>
                    <ServicesP>Ssld ibgaj gbò aihgo n io oih piugo ufoiytc ytxd iytxcl ucop cñi gñi jgñyi cv.s</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>

                    <ServicesH2>Servicios</ServicesH2>
                    <ServicesP> iub piug uigñu igñi fo fuy diyk cvuñgñ uyc lyx tdflñi ñugt dñu -cl tdf.k</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
