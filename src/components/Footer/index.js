import React from "react";
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinkWrapper, FooterLinkTitle, FooterLinkItems, FooterLink} from './FooterElements';

function Footer() {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
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
                <FooterLink to="/electromagneticas">Cerraduras electromagnéticas</FooterLink>
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
              {/* <FooterLinkTitle>This is the title</FooterLinkTitle> */}
                <FooterLink to="/">Soluciones</FooterLink>
                <FooterLink to="/">Configurador</FooterLink>
                <FooterLink to="/">Tienda</FooterLink>
                <FooterLink to="/">Contacto</FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>
          <FooterLinkWrapper>
          {/* Column 5 */}
            {/* <FooterLinkItems>
              <FooterLinkTitle>This is the title</FooterLinkTitle>
                <FooterLink to="/">Yeah!</FooterLink>
                <FooterLink to="/">Yeah!</FooterLink>
                <FooterLink to="/">Yeah!</FooterLink>
                <FooterLink to="/">Yeah!</FooterLink>
                <FooterLink to="/">Yeah!</FooterLink>
                <FooterLink to="/">Yeah!</FooterLink>
                <FooterLink to="/">Yeah!</FooterLink>
            </FooterLinkItems> */}
          </FooterLinkWrapper>
        </FooterLinksContainer>
      </FooterWrap>
    </FooterContainer>
  );
}

export default Footer;