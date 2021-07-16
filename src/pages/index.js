import React, { useState } from 'react'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data'
import Navbar from '../components/Navbar/Navbar'
import Services from '../components/Services/Services'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import Instafeed from '../components/Instafeed/Instafeed'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <Instafeed />
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <InfoSection {...homeObjThree}/>
            <Services />
            <Footer />
        </>
    )
}

export default Home
