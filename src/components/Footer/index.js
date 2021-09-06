import React from "react";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { CompanyLogo, FooterContainer, FooterWrap, FooterLinksContainer, FooterLinkWrapper, FooterLinkTitle, FooterLinkItems, FooterLink, SocialMediaContainer, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcon, SocialIconLink } from './FooterElements';
import OPCLLogo from '../../images/companyLogo.png'
import { animateScroll as scroll } from 'react-scroll';



function Footer() {
  const toggleHome = () => {
    scroll.scrollToTop();
}
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <SocialMediaContainer>
            <SocialMediaWrap>
              <SocialLogo to='/' onClick={toggleHome}>
                <CompanyLogo src={OPCLLogo}/>
              </SocialLogo>
              <SocialIcon>
                <SocialIconLink href='https://www.instagram.com/openersclosers/' target="_blank" aria-label="Instagram"><FaInstagram /></SocialIconLink>
                <SocialIconLink href='https://www.linkedin.com/in/openers-closers-53940147/' target="_blank" aria-label="LinkedIn"><FaLinkedin /></SocialIconLink>
                <SocialIconLink href='https://www.youtube.com/channel/UCXruYOvDQ8bGijn6PJJy2wQ' target="_blank" aria-label="Youtube"><FaYoutube /></SocialIconLink>
              </SocialIcon>
            </SocialMediaWrap>
          </SocialMediaContainer>
          <FooterLinkWrapper>
          {/* Column 1 */}
            <FooterLinkItems>
              <FooterLinkTitle>SOBRE NOSOTROS</FooterLinkTitle>
                <FooterLink to="/">Nuestra historia</FooterLink>
                <FooterLink to="/">Mision, valores y vision</FooterLink>
                <FooterLink to="/">Memoria corporativa</FooterLink>
                <FooterLink to="/">Responsabilidad social</FooterLink>
            </FooterLinkItems>
          {/* Column 2 */}
            <FooterLinkItems>
              <FooterLinkTitle>PRODUCTOS</FooterLinkTitle>
                <FooterLink to="/electronicos">Cerraderos electronicos</FooterLink>
                <FooterLink to="/electricos">Cerraderos eléctricos</FooterLink>
                <FooterLink to="/electromagneticos">Cerraduras electromagnéticas</FooterLink>
                <FooterLink to="/seguridad">Cerraduras de seguridad</FooterLink>
                <FooterLink to="/accesorios">Accesorios</FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>
          <FooterLinkWrapper>
          {/* Column 3 */}
            <FooterLinkItems>
              <FooterLinkTitle>SERVICIOS</FooterLinkTitle>
                <FooterLink to="/">Consultoria tecnologica</FooterLink>
                <FooterLink to="/">Atencion al cliente</FooterLink>
                <FooterLink to="/">Formacion de producto</FooterLink>
                <FooterLink to="/">Calendario de eventos</FooterLink>
                <FooterLink to="/">Descargas</FooterLink>
            </FooterLinkItems>
          {/* Column 4 */}
            <FooterLinkItems>
                <FooterLink to="/">Soluciones</FooterLink>
                <FooterLink to="/">Configurador</FooterLink>
                <FooterLink to="/">Tienda</FooterLink>
                <FooterLink to="/contacto">Contacto</FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>
        </FooterLinksContainer>
              <WebsiteRights>© 2001-{new Date().getFullYear()} Openers & Closers - Todos los derechos reservados  |  <FooterLink to="/privacidad">Política de Privacidad</FooterLink>  |  <FooterLink to="/cookies">Política de Cookies</FooterLink></WebsiteRights>
      </FooterWrap>
    </FooterContainer>
  );
}

export default Footer;