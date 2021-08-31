import React, { useState, useEffect } from 'react';
import { Nav, NavLink } from './ProductNavBarElements';
import { animateScroll as scroll } from 'react-scroll';


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
            <Nav scrollNav={scrollNav}>
                <NavLink to="/electronicos" activeStyle>
                    Opcion
                </NavLink>
                <NavLink to="/electronicos" activeStyle>
                    Opcion
                </NavLink>
                <NavLink to="/electronicos" activeStyle>
                    Opcion
                </NavLink>
                <NavLink to="/electronicos" activeStyle>
                    Opcion
                </NavLink>
                <NavLink to="/electronicos" activeStyle>
                    Opcion
                </NavLink>

            </Nav>    
        </>
    )
};

export default ProductNavbar

