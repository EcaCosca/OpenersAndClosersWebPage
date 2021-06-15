import React from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './FooterElements';


const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <div id="profile-image"><img src={require('../../images/companyLogo.png')} alt="Openers and Closers Logo"/></div>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/electronicos" activeStyle>
                        CERRADEROS ELECTRÓNICOS
                    </NavLink>
                    <NavLink to="/electricos" activeStyle>
                        CERRADEROS ELÉCTRICOS
                    </NavLink>
                    <NavLink to="/electromagneticos" activeStyle>
                        CERRADURAS ELECTROMAGNÉTICOS
                    </NavLink>
                    <NavLink to="/seguridad" activeStyle>
                        CERRADURAS DE SEGURIDAD
                    </NavLink>
                    <NavLink to="/accesorios" activeStyle>
                        ACCESORIOS
                    </NavLink>
                </NavMenu> 
            </Nav>
        </>
    )
};

export default Navbar
