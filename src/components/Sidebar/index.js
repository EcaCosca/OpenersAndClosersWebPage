import React from 'react'
import{ SidebarContainer, Icon, CloseIcon, SidebarLink, SidebarWrapper, SidebarRouter, SidebarMenu, SideBtnWraper } from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <>
            <SidebarContainer isOpen={isOpen} onClick={toggle}>
                <Icon onClick={toggle}>
                    <CloseIcon />
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to="/electronicos"  onClick={toggle}>
                            Cerraderos Electrónicos
                        </SidebarLink>
                        <SidebarLink to="/electricos" onClick={toggle}>
                            Cerraderos Eléctricos
                        </SidebarLink>
                        <SidebarLink to="/electromagneticos" onClick={toggle}>
                            Cerraduras Electromagnéticas
                        </SidebarLink>
                        <SidebarLink to="/seguridad" onClick={toggle}>
                            Cerraduras de seguridad
                        </SidebarLink>
                        <SidebarLink to="/accesorios" onClick={toggle}>
                            Accesorios
                        </SidebarLink>
                    </SidebarMenu>
                    <SideBtnWraper>
                        <SidebarRouter to='/signin'>
                            Sign In
                        </SidebarRouter>
                    </SideBtnWraper>
                </SidebarWrapper>
            </SidebarContainer>
        </>
    )
}

export default Sidebar
