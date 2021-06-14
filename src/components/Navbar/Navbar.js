import React from 'react'

const Navbar = () => {
    return (
        <div>
            <Nav>
                <NavLink to="/">
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
                        CERRADURAS DE SEGURIDAD
                    </NavLink>
                    <NavLink to="/accesorios" activeStyle>
                        ACCESORIOS
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to=''
                </NavBtn>
                
            </Nav>
        </div>
    )
}

export default Navbar
