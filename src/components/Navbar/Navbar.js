import React from 'react';
// import companyLogo from 'src\images\companyLogo.png'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements';


const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    {/* <img src={companyLogo} alt="Openers and Closers Logo"/> */}
                    <h1>Logo</h1>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/cerraderos-electronicos" activeStyle>
                        CERRADEROS ELECTRÓNICOS
                    </NavLink>
                    <NavLink to="/cerraderos-electricos" activeStyle>
                        CERRADEROS ELÉCTRICOS
                    </NavLink>
                    <NavLink to="/cerraderos-electromagneticos" activeStyle>
                        CERRADURAS ELECTROMAGNÉTICOS
                    </NavLink>
                    <NavLink to="/cerraduras-de-seguridad" activeStyle>
                        CERRADURAS DE SEGU RIDAD
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
