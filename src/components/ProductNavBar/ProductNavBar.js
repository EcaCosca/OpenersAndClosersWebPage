import React from 'react';
import { Nav, NavLink } from './ProductNavBarElements';

const ProductNavbar = () => {
    return (
        <>
            <Nav>
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

