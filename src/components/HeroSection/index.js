import React, {useState} from 'react'
import Video from '../videos/videolqshort.mp4'

import { 
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP
} from './HeroElements'
import Fade from 'react-reveal/Fade';


const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    <Fade top cascade>
                        Openers and Closers
                    </Fade>
                </HeroH1>
                <HeroP>
                    <Fade top cascade>
                    Openers & Closers es una empresa familiar que se fundó con el objetivo de producir cerraderos eléctricos de alta calidad para un mercado internacional.
                    </Fade>
                </HeroP>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
