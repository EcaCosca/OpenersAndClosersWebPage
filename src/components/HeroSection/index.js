import React, {useState} from 'react'
import Video from '../videos/videolq.mp4'
import { Button } from '../ButtonElements';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'

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
                <HeroH1>Openers and Closers</HeroH1>
                    <HeroP>
                    Openers & Closers es una empresa familiar que se fundó con el objetivo de producir cerraderos eléctricos de alta calidad para un mercado internacional.
                    </HeroP>
                    <HeroBtnWrapper>
                        {/* <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
                            Get started {hover ? <ArrowForward /> : <ArrowRight />}
                        </Button> */}
                    </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
