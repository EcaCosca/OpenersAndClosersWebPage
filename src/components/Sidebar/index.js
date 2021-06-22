import React from 'react'
import{ SidebarContainer, Icon, CloseIcon } from './SidebarElements';

const Sidebar = () => {
    return (
        <>
            <SidebarContainer>
                <Icon>
                    <CloseIcon />
                </Icon>
                <SidebarWraper>
                    <SidebarMenu>
                        <SidebarLink to="/electronicos" activeStyle>
                            CERRADEROS<br /> ELECTRÓNICOS
                        </SidebarLink>
                        <SidebarLink to="/electricos" activeStyle>
                            CERRADEROS
                            <br />
                            ELÉCTRICOS
                        </SidebarLink>
                        <SidebarLink to="/electromagneticos" activeStyle>
                            CERRADURAS
                            <br />
                            ELECTROMAGNÉTICOS
                        </SidebarLink>
                        <SidebarLink to="/seguridad" activeStyle>
                            CERRADURAS
                            <br />
                            DE
                            <br />
                            SEGURIDAD
                        </SidebarLink>
                        <SidebarLink to="/accesorios" activeStyle>
                            ACCESORIOS
                        </SidebarLink>
                    </SidebarMenu>
                    <SideBtnWraper>
                        <SidebarRouter to='/signin'>
                            Sign In
                        </SidebarRouter>
                    </SideBtnWraper>
                </SidebarWraper>
            </SidebarContainer>
        </>
    )
}

export default Sidebar
