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

                    <h3>SOBRE NOSOTROS</h3>
                    <NavLink to="/historia" activeStyle>
                        NUESTRA HISTORIA
                    </NavLink>
                    <NavLink to="/vision" activeStyle>
                        MISION, VALORES Y VISION
                    </NavLink>
                    <NavLink to="/corporativa" activeStyle>
                        MEMORIA CORPORATIVA
                    </NavLink>
                    <NavLink to="/responsabilidad" activeStyle>
                        RESPONSABILIDAD SOCIAL CORPORATIVA
                    </NavLink>

                    <h3>PRODUCTOS</h3>
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
                    
                    <h3>SERVICIOS</h3>
                    <NavLink to="/consultoria" activeStyle>
                        CONSULTORIA TECNOLOGIA DE PUERTAS
                    </NavLink>
                    <NavLink to="/atencionAlCliente" activeStyle>
                        SERVICIO DE ATENCION AL CLIENTE
                    </NavLink>
                    <NavLink to="/formacion" activeStyle>
                        FORMACION DE PRODUCTO
                    </NavLink>
                    <NavLink to="/calendario" activeStyle>
                        CALENDARIO DE EVENTOS
                    </NavLink>
                    <NavLink to="/descargas" activeStyle>
                        DESCARGAS
                    </NavLink>

                    <NavLink to="/soluciones" activeStyle>
                        SOLUCIONES
                    </NavLink>
                    <NavLink to="/configurador" activeStyle>
                        CONFIGURADOR
                    </NavLink>
                    <NavLink to="/tienda" activeStyle>
                        TIENDA
                    </NavLink>
                    <NavLink to="/contacto" activeStyle>
                        CONTACTO
                    </NavLink>
                </NavMenu> 
            </Nav>
        </>
    )
};

export default Navbar
