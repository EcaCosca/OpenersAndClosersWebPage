import React from 'react'
import Video from '../videos/videolq.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'

const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            {/* <HeroContent>
                <HeroH1>Openers and Closers</HeroH1>
                    <HeroP>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at enim augue. Aenean odio tortor, mattis suscipit enim quis, euismod tristique magna. Quisque placerat eros eget nibh molestie tristique. Vivamus gravida leo non risus tincidunt porttitor. Nulla lacinia mattis libero et pharetra. Nunc sodales lorem in tortor ornare, non efficitur neque euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce fermentum euismod diam placerat commodo. Phasellus lobortis nibh turpis, et faucibus sapien ultricies id. Donec eu malesuada metus
                    </HeroP>
            </HeroContent> */}
        </HeroContainer>
    )
}

export default HeroSection
