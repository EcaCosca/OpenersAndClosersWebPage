import React, {useState, useEffect} from 'react';
import companyLogo from '../../images/companyLogo.png'
import {Nav, NavLink, Bars, NavMenu, NavBtnLink, NavBtn} from './NavbarElements';

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = ()=> {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavLink to="/">
                    <img className='company-logo' src={companyLogo} alt="Openers and Closers Logo"/>
                </NavLink>
                <Bars onClick={toggle} />
                <NavMenu>
                    <NavLink to="/electronicos" activeStyle>
                        CERRADEROS<br /> ELECTRÓNICOS
                    </NavLink>
                    <NavLink to="/electricos" activeStyle>
                        CERRADEROS
                        <br />
                        ELÉCTRICOS
                    </NavLink>
                    <NavLink to="/electromagneticos" activeStyle>
                        CERRADURAS
                        <br />
                        ELECTROMAGNÉTICOS
                    </NavLink>
                    <NavLink to="/seguridad" activeStyle>
                        CERRADURAS
                        <br />
                        DE
                        <br />
                        SEGURIDAD
                    </NavLink>
                    <NavLink to="/accesorios" activeStyle>
                        ACCESORIOS
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signin">Sign Up</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    )
};

export default Navbar
