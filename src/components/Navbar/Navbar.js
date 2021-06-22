import React from 'react';
import companyLogo from '../../images/companyLogo.png'
import {Nav, NavLink, Bars, NavMenu, NavBtnLink, NavBtn} from './NavbarElements';


const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
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
