import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import { Nav, NavLink, NavMenu, NavBtnLink, NavBtn, NavLogo, CompanyLogo } from './ProductNavBarElements';
import { IconContext } from 'react-icons/lib'
import dropdown from '../Dropdown/dropdown';
import OPCLLogo from '../../images/companyLogo.png'

const ProductNavbar = ({ toggle }) => {
   
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

