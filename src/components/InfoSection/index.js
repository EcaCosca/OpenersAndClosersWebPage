import React from 'react'
import { Button } from '../ButtonElements';
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, ImgWrap, Image, BtnWrap } from './InfoElements'
import Fade from 'react-reveal/Fade';

const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, alt, primary, dark, dark2}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                    <Fade left cascade>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <Button to='home'
                                    smooth= {true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                    primary={primary ? 1: 0}
                                    dark={dark ? 1 : 0}
                                    dark2={dark2 ? 1 : 0}
                                    >{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                    </Fade>
                    <Fade right cascade>
                        <Column2>
                            <ImgWrap>
                                <Image src={img} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </Fade>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
