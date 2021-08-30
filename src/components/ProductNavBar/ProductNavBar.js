import React, {useState, useEffect} from 'react';
import { Nav, NavLink, NavMenu, NavBtnLink, NavBtn, NavLogo, CompanyLogo } from './ProductNavBarElements';
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll';
import OPCLLogo from '../../images/companyLogo.png'

const ProductNavbar = ({ toggle }) => {
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
         <h1>aaah</h1>
            <Nav scrollNav={scrollNav}>
                {/* <NavLogo to="/" onClick={toggleHome}>
                    <CompanyLogo src={OPCLLogo}/>
                </NavLogo> */}
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
            </Nav>
        
        </>
    )
};

export default ProductNavbar

