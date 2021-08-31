import React, {useState, useEffect} from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtnLink, NavBtn, NavLogo, CompanyLogo } from './NavbarElements';
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll';
import OPCLLogo from '../../images/companyLogo.png'

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

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
        <IconContext.Provider value={{ color: '#fff'}}> 
            <Nav scrollNav={scrollNav}>
                <NavLogo to="/" onClick={toggleHome}>
                    <CompanyLogo src={OPCLLogo}/>
                </NavLogo>
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
                    <NavBtnLink to="/signin">Catalogo {new Date().getFullYear()}</NavBtnLink>
                    {/* <NavBtnLink to="/create">Create User</NavBtnLink> */}
                    {/* <NavBtnLink to="//openers-closers.es/source/CAT_ENERO%202020_WEB_ESP.pdf">Catalogo</NavBtnLink> */}
                </NavBtn>
            </Nav>
        </IconContext.Provider>
        </>
    )
};

export default Navbar
